/*
* Common Setup Class for Controlled Document and Document Training
*
* ********************************* Revision History ***************************
* 1. [MS-27]: Only authorized users are to add Approvers and Training Requirements
********************************** Revision History **************************/
@isTest
public class CQ_MS_Test_Controlled_Doc_CS {
    
    /*
    * This method creates controlled document approval
    */
    public static compliancequest__SQX_Controlled_Document_Approval__c createDocApproval(id docId,id approverId,integer step,boolean noCommitToDb){
        compliancequest__SQX_Controlled_Document_Approval__c docApproval = new compliancequest__SQX_Controlled_Document_Approval__c (
            compliancequest__SQX_Controlled_Document__c = docId,
            compliancequest__Step__c = step,
            compliancequest__SQX_User__c = approverId
        );
        if(!noCommitToDb){insert docApproval;}        
        return docApproval;
    }
    
    /*
    * This method creates training Requirement
    */
    public static compliancequest__SQX_Requirement__c createDocRequirement(id docId,id jobFunctionId,boolean isActive,boolean noCommitToDb){
        compliancequest__SQX_Requirement__c requirement = new compliancequest__SQX_Requirement__c (
            compliancequest__SQX_Controlled_Document__c = docId,
            compliancequest__SQX_Job_Function__c = jobFunctionId,
            compliancequest__Level_of_Competency__c = CQ_CCC_Test_Controlled_Doc_CS.getDocTrainLevelOfComp(),
            compliancequest__Active__c = isActive,
            compliancequest__Optional__c = false,
            compliancequest__Require_Refresher__c = false,
            compliancequest__Skip_Revision_Training__c = false
        );
        if(!noCommitToDb){insert requirement;}        
        return requirement;
    }
    
    /*
    * This method creates Job Function
    */
    public static compliancequest__SQX_Job_Function__c createJobFucntion(){
        Integer randomNumber = (Integer)( Math.random() * 1000000 );
        compliancequest__SQX_Job_Function__c  jobFunction = new compliancequest__SQX_Job_Function__c  (
            Name = 'TestJobFunction' + randomNumber,
            compliancequest__Active__c = true           
        );
        insert jobFunction;        
        return jobFunction;
    }

}