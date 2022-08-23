/********************************** Revision History ***************************
* 1. [MS-10]: Controlled Document Create / Edit / Detail Screen Configuration
* Validation Rule: CQ_MS_Need_Process_Or_Standard_Not_Both
* 2. [MS-27]: Only authorized users are to add Approvers and Training Requirements
* Validation Rule: CQ_MS_Restrict_Adding_Approvers
* Validation Rule: CQ_MS_Restrict_Adding_Requirements
* 3. [MS-23]: Copy Controlled Document Approvers from one revision to another
* Flow: CQ_MS_Controlled_Document_After_Create_RT_Flow
********************************** Revision History **************************/
@isTest
public class CQ_MS_Test_Controlled_Document {

    /**
    * GIVEN: A Template Document
    * WHEN: Created with Service and Standard
    * THEN: Failed to insert template document record
    * @Story: [MS-10]
    * Validation Rule: CQ_MS_Need_Process_Or_Standard_Not_Both
    */
    public static testmethod void givenTemplateDocument_WhenCreatedWithServiceAndStandard_ThenFailedToInsertTemplateDocumentRecord(){
        User stdUser = CQ_CCC_Test_Generic_CS.createUser(CQ_MS_Constants.STANDARD_USER_PROFILE);
        System.runAs(stdUser){
            
            //Arrange: Create new service
            compliancequest__SQX_Standard_Service__c service = CQ_CCC_Test_Generic_CS.createService();
            
            //Arrange: Get Standard picklist
            Schema.DescribeFieldResult standards = compliancequest__SQX_Controlled_Document__c.CQ_MS_System_Standard__c.getDescribe();
            String standard = standards.getPicklistValues()[0].getLabel();
            
            //Arrange: Create Template Document with Service and Standard both not null
            compliancequest__SQX_Controlled_Document__c tempDoc = CQ_CCC_Test_Controlled_Doc_CS.createControlledDocument(CQ_MS_Constants.TEMPLATE_DOCUMENT_TYPE, true);
            tempDoc.compliancequest__SQX_Service__c = service.ID;
           	tempDoc.CQ_MS_System_Standard__c = standard;
            
            //Act: Insert Temp Document
            Database.SaveResult res = Database.insert(tempDoc, false);
            
            //Assert: Failed to insert template document record
           	System.assertEquals(false, res.isSuccess(), 'Process and System Standard both are populated');
            
            //Arrange: Create Template Document with Service and Standard both empty
            tempDoc.compliancequest__SQX_Service__c = null;
           	tempDoc.CQ_MS_System_Standard__c = null;
            
            //Act: Insert Temp Document
            Database.SaveResult res1 = Database.update(tempDoc, false);
            
            //Assert: Failed to insert template document record
           	System.assertEquals(false, res1.isSuccess(), 'Process and System Standard both are not populated');
            
            //Arrange: Create Template Document with Service
            tempDoc.compliancequest__SQX_Service__c = service.ID;

            //Act: Insert Temp Document
            Database.SaveResult res2 = Database.insert(tempDoc, false);
            
            //Assert: Successfully inserted template document record
            System.assertEquals(true, res2.isSuccess(), 'Either Process or System Standard is populated');
        
        }
    }
    
    /**
    * GIVEN: A Controlled Document
    * WHEN: Adding Approvers and Requirement Without Permission
    * THEN: Not Allowed to Add Approvers and Requirements
    * @Story: [MS-27]
    * Validation Rule: CQ_MS_Restrict_Adding_Approvers
    * Validation Rule: CQ_MS_Restrict_Adding_Requirements
    */
    public static testmethod void givenControlledDocument_WhenAddingApproversAndRequirementsWithoutPermission_ThenNotAllowedToAddApproverAndRequirements(){
        User stdUser = CQ_CCC_Test_Generic_CS.createUser(CQ_MS_Constants.STANDARD_USER_PROFILE);
        System.runAs(stdUser){
            
            //Arrange: Create new service
            compliancequest__SQX_Standard_Service__c service = CQ_CCC_Test_Generic_CS.createService();
            
            //Arrange: Create Controlled Document with Service
            compliancequest__SQX_Controlled_Document__c conDoc = CQ_CCC_Test_Controlled_Doc_CS.createControlledDocument(CQ_MS_Constants.CONTROLLED_DOCUMENT_TYPE, true);
            conDoc.compliancequest__SQX_Service__c = service.ID;
            
            //Act: Insert Controlled Document
            insert conDoc;
                        
            //Arrange: Create Controlled document approval
            compliancequest__SQX_Controlled_Document_Approval__c controlDocApproval = CQ_MS_Test_Controlled_Doc_CS.createDocApproval(conDoc.Id,stdUser.Id,1,true);
            
            //Act: Insert Controlled document approval
            Database.SaveResult res = Database.insert(controlDocApproval, false);
            
            //Assert: Should be able to add but was unable to add approvers
            System.assertEquals(false, res.isSuccess(), 'Should be unable to add but was able to add approvers');
            
            //Arrange: Create Job Function
            compliancequest__SQX_Job_Function__c jobFunction = CQ_MS_Test_Controlled_Doc_CS.createJobFucntion();
            
            //Arrange: Create Requirement
            compliancequest__SQX_Requirement__c docReq = CQ_MS_Test_Controlled_Doc_CS.createDocRequirement(conDoc.Id,jobFunction.Id,false,true);
            
            //Act: Insert Requirement
            Database.SaveResult res1 = Database.insert(docReq, false);
            
            //Assert: Should be able to add but was unable to add requirement
            System.assertEquals(false, res1.isSuccess(), 'Should be unable to add but was able to add requirement');
            
            //Arrange: Update status of controlled document
            conDoc.compliancequest__Document_Status__c = CQ_MS_Constants.DOCUMENT_STATUS_CURRENT;
            update conDoc;
            
            //Arrange: Update activity code of controlled document
            conDoc.compliancequest__Activity_Code__c = CQ_MS_Constants.DOCUMENT_RECORD_ACTIVITY_REVISE;
            update conDoc;
            
            //Arrange: Create Revised Controlled Document with Service
            compliancequest__SQX_Controlled_Document__c revDoc = CQ_CCC_Test_Controlled_Doc_CS.createControlledDocument(CQ_MS_Constants.CONTROLLED_DOCUMENT_TYPE, true);
           	revDoc.compliancequest__SQX_Service__c = service.ID;
            revDoc.compliancequest__SQX_Copy_Of__c = conDoc.Id;
            insert revDoc;
            
            //Arrange: Get permission set
            Id permissionSetId = [SELECT Id FROM PermissionSet WHERE Name = :CQ_MS_Constants.CQ_MS_ADD_APPROVERS_TRAINING_PERMISSION_SET].Id;
            PermissionSetAssignment psa = new PermissionSetAssignment (PermissionSetId = permissionSetId, AssigneeId = stdUser.Id);
            insert psa;
            
            //Arrange: Create Controlled document approval
            compliancequest__SQX_Controlled_Document_Approval__c conDocApproval = CQ_MS_Test_Controlled_Doc_CS.createDocApproval(revDoc.Id,stdUser.Id,1,true);
            
            //Act: Insert Controlled document approval
            res = Database.insert(conDocApproval, false);
            
            //Assert: Should be unable to add but was able to add approvers
            System.assertEquals(true, res.isSuccess(), 'Should be able to add but was unable to add approvers');
            
            //Arrange: Create Requirement
            compliancequest__SQX_Requirement__c docRequirement = CQ_MS_Test_Controlled_Doc_CS.createDocRequirement(revDoc.Id,jobFunction.Id,false,true);
            
            //Act: Insert Requirement
            res = Database.insert(docRequirement, false);
            
            //Assert: Should be unable to add but was able to add requirement
            System.assertEquals(true, res.isSuccess(), 'Should be able to add but was unable to add requirement');
        }
    }
    
    /**
    * GIVEN: A Controlled Document
    * WHEN: Revised
    * THEN: Approver copied to the revision
    * @Story: [MS-23]
    * Flow: CQ_MS_Controlled_Document_After_Create_RT_Flow
    */
    public static testmethod void givenControlledDocument_WhenRevised_ThenApproverCopiedToRevision(){
        User stdUser = CQ_CCC_Test_Generic_CS.createUser(CQ_MS_Constants.STANDARD_USER_PROFILE);
        User stdUserApp1 = CQ_CCC_Test_Generic_CS.createUser(CQ_MS_Constants.STANDARD_USER_PROFILE);
        User stdUserApp2 = CQ_CCC_Test_Generic_CS.createUser(CQ_MS_Constants.STANDARD_USER_PROFILE);
        List<compliancequest__SQX_Controlled_Document_Approval__c> conDocApps = new List<compliancequest__SQX_Controlled_Document_Approval__c>();
        
        Id permissionSetId = [SELECT Id FROM PermissionSet WHERE Name = :CQ_MS_Constants.CQ_MS_ADD_APPROVERS_TRAINING_PERMISSION_SET].Id;
        PermissionSetAssignment psa = new PermissionSetAssignment (PermissionSetId = permissionSetId, AssigneeId = stdUser.Id);
        insert psa;
        
        System.runAs(stdUser){
            //Arrange: Create new service
            compliancequest__SQX_Standard_Service__c service = CQ_CCC_Test_Generic_CS.createService();
            
            //Arrange: Create Controlled Document with Service
            compliancequest__SQX_Controlled_Document__c conDoc = CQ_CCC_Test_Controlled_Doc_CS.createControlledDocument(CQ_MS_Constants.CONTROLLED_DOCUMENT_TYPE, true);
            conDoc.compliancequest__SQX_Service__c = service.ID;
            
            //Act: Insert Controlled Document
            insert conDoc;
            
            //Arrange: Create Controlled document approvals
            compliancequest__SQX_Controlled_Document_Approval__c conDocApproval1 = CQ_MS_Test_Controlled_Doc_CS.createDocApproval(conDoc.Id,stdUserApp1.Id,1,false);
            compliancequest__SQX_Controlled_Document_Approval__c conDocApproval2 = CQ_MS_Test_Controlled_Doc_CS.createDocApproval(conDoc.Id,stdUserApp2.Id,2,false);
            conDocApps.add(conDocApproval1);
            conDocApps.add(conDocApproval2);
            
            //Arrange: Update status of controlled document
            conDoc.compliancequest__Document_Status__c = CQ_MS_Constants.DOCUMENT_STATUS_CURRENT;
            update conDoc;
            
            //Arrange: Create Revised Controlled Document with Service
            compliancequest__SQX_Controlled_Document__c revDoc = CQ_CCC_Test_Controlled_Doc_CS.createControlledDocument(CQ_MS_Constants.CONTROLLED_DOCUMENT_TYPE, true);
           	revDoc.compliancequest__SQX_Service__c = service.ID;
            revDoc.compliancequest__SQX_Copy_Of__c = conDoc.Id;
            insert revDoc;
            
            //Act: Get Revised Control Doc Approvals
            List<compliancequest__SQX_Controlled_Document_Approval__c> copiedConDocApp = [SELECT Id,compliancequest__SQX_User__c FROM compliancequest__SQX_Controlled_Document_Approval__c WHERE compliancequest__SQX_Controlled_Document__c=:revDoc.Id ORDER BY compliancequest__Step__c];
            
            //Assert: Approver copied to Revised Control Doc
            System.assertEquals(true, copiedConDocApp.size() == conDocApps.size(), 'Approvers not copied to Revised Control Doc');
            
            //Act: Approvers are copied in same order
            boolean conDocAppsInOrder = true;
            for (Integer i=0; i<copiedConDocApp.size(); i++){
                if(!copiedConDocApp.get(i).compliancequest__SQX_User__c.equals(conDocApps.get(i).compliancequest__SQX_User__c)){
                	conDocAppsInOrder = false;
                    break;
            	}
            }
                        
            //Assert: Approver copied to Revised Control Doc in same Order
            System.assertEquals(true, conDocAppsInOrder, 'Approvers not copied to Revised Control Doc in Same Order');
            
        }
    }
}