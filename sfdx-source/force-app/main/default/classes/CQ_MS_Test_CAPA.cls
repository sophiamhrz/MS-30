/********************************** Revision History ***************************
* 1. [MS-11]: CAPA Create / Edit / Detail Page
* Flow: CQ_MS_Get_CAPA_Approval_Matrix
********************************** Revision History **************************/
@isTest
public class CQ_MS_Test_CAPA {

    /**
    * GIVEN: A CAPA record
    * WHEN: Created
    * THEN: Set Approval Matrix
    * @Story: [MS-11]
    * Flow: CQ_MS_Get_CAPA_Approval_Matrix
    */
    public static testmethod void givenCAPARecord_WhenCreated_ThenSetApprovalMatrix(){
        User stdUser = CQ_CCC_Test_Generic_CS.createUser(CQ_MS_Constants.STANDARD_USER_PROFILE);
        
        Id permissionSetId = [SELECT Id FROM PermissionSet WHERE Name = :CQ_MS_Constants.CQ_CAPA_OWNER_PERMISSION_SET].Id;
        PermissionSetAssignment psa = new PermissionSetAssignment (PermissionSetId = permissionSetId, AssigneeId = stdUser.Id);
        insert psa;
        
        System.runAs(stdUser){
            //Arrange: Get CAPA Record Type 
            Id capaRecordTypeId = Schema.SObjectType.compliancequest__SQX_CAPA__c.getRecordTypeInfosByName().get('CAPA').getRecordTypeId();
            
            //Arrange: Create Approval Matrix for CAPA
            Id rtId= Schema.SObjectType.compliancequest__SQX_Approval_Matrix__c.getRecordTypeInfosByName().get('CAPA').getRecordTypeId();
            compliancequest__SQX_Approval_Matrix__c capaAppMatrix = new compliancequest__SQX_Approval_Matrix__c(Name=CQ_MS_Constants.CAPA_PRODUCT_QUALITY_HOUSTAN_APPROVAL_MATRIX,RecordTypeId=rtId);
            insert capaAppMatrix;
            
            //Arrange: Create CAPA Record
            compliancequest__SQX_CAPA__c capa = CQ_CCC_Test_CAPA_CS.createCAPA(true);
            capa.RecordTypeId = capaRecordTypeId;
            capa.compliancequest__CAPA_Type__c = CQ_MS_Constants.CAPA_TYPE_CUSTOMER;
            capa.CQ_MS_CAPA_Subtype__c = CQ_MS_Constants.CAPA_SUBTYPE_PRODUCT_QUALITY;
            capa.compliancequest__Org_Division__c = CQ_MS_Constants.CAPA_DIVISION_HOUSTON;
            insert capa;
            
            //Arrange: Ensure approval matrix is set for CAPA record
            compliancequest__SQX_CAPA__c capaRecord = [SELECT Id, compliancequest__SQX_Approval_Matrix__c FROM compliancequest__SQX_CAPA__c WHERE Id = :capa.Id];
            
            //Assert: Default Approval Matrix set for CAPA
            compliancequest__SQX_Approval_Matrix__c appMatrix = [SELECT Id, Name FROM compliancequest__SQX_Approval_Matrix__c WHERE Id = :capaRecord.compliancequest__SQX_Approval_Matrix__c];
            System.assertEquals(CQ_MS_Constants.CAPA_PRODUCT_QUALITY_HOUSTAN_APPROVAL_MATRIX, appMatrix.Name, 'Expected approval matrix name: '+CQ_MS_Constants.CAPA_PRODUCT_QUALITY_HOUSTAN_APPROVAL_MATRIX+' actual approval matrix name: '+appMatrix.Name);
            
        }
    }
}