// basic import
import { track, api} from 'lwc';
import cquiControlledDocumentCreate from 'c/cquiControlledDocumentCreate';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_COMPLIANCEQUEST__SQX_CONTROLLED_DOCUMENT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c';

import FIELD_COMPLIANCEQUEST__SQX_CONTROLLED_DOCUMENT__C__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.Name';


import FIELD_RECORDTYPENAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.RecordType.Name';
import FIELD_RECORDTYPEDEVELOPERNAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.RecordType.DeveloperName';

// Field_<field api name without __c if present>

import FIELD_RECORDTYPEID from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.RecordTypeId';

import FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Document_Type__c';

import FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Change_Order__c';

import FIELD_COMPLIANCEQUEST__DOCUMENT_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Document_Number__c';

import FIELD_COMPLIANCEQUEST__REVISION__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Revision__c';

import FIELD_COMPLIANCEQUEST__TITLE__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Title__c';

import FIELD_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Document_Category__c';

import FIELD_COMPLIANCEQUEST__ORG_DIVISION__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Org_Division__c';

import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Department__c';

import FIELD_COMPLIANCEQUEST__SQX_SERVICE__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Service__c';

import FIELD_CQ_MS_SYSTEM_STANDARD__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.CQ_MS_System_Standard__c';

import FIELD_COMPLIANCEQUEST__DESCRIPTION__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Description__c';

import FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Default_Approval_Matrix__c';

import FIELD_COMPLIANCEQUEST__DRAFT_VAULT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Draft_Vault__c';

import FIELD_COMPLIANCEQUEST__CONTENT_REFERENCE__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Content_Reference__c';

import FIELD_COMPLIANCEQUEST__RELEASE_VAULT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Release_Vault__c';

import FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Secondary_Content__c';

import FIELD_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Distribution_Vault__c';

import FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Secondary_Content_Reference__c';

import FIELD_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Secondary_Format_Setting__c';

import FIELD_COMPLIANCEQUEST__IS_SCORM_CONTENT__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Is_Scorm_Content__c';

import FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Approval_Matrix__c';

import FIELD_COMPLIANCEQUEST__FIRST_APPROVER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__First_Approver__c';

import FIELD_COMPLIANCEQUEST__SECOND_APPROVER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Second_Approver__c';

import FIELD_COMPLIANCEQUEST__THIRD_APPROVER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Third_Approver__c';

import FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Fourth_Approver__c';

import FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__C from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Fifth_Approver__c';





// additional Field_<field api name without __c if present>



// Lookup fields Field_<field api name without __c if present>_<name field>


    


    
import FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Document_Type__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Change_Order__r.Name';
    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Department__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Service__r.Name';
    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Default_Approval_Matrix__r.Name';
    


    


    


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__SQX_Approval_Matrix__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__FIRST_APPROVER__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__First_Approver__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SECOND_APPROVER__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Second_Approver__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__THIRD_APPROVER__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Third_Approver__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Fourth_Approver__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__NAME from '@salesforce/schema/compliancequest__SQX_Controlled_Document__c.compliancequest__Fifth_Approver__r.Name';
    



// import section custom label
    
        
import CQCQMSDOC_DOCUMENT_TYPE from '@salesforce/label/c.CQCQMSDOC_DOCUMENT_TYPE';
        
    
        
import CQCQMSDOC_PROFILE from '@salesforce/label/c.CQCQMSDOC_PROFILE';
        
    
        
import CQCQMSDOC_CONTENT from '@salesforce/label/c.CQCQMSDOC_CONTENT';
        
    
        
import CQCQMSDOC_DOCUMENT_APPROVERS from '@salesforce/label/c.CQCQMSDOC_DOCUMENT_APPROVERS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [

    FIELD_RECORDTYPENAME,
    FIELD_RECORDTYPEDEVELOPERNAME,
 

    FIELD_COMPLIANCEQUEST__SQX_CONTROLLED_DOCUMENT__C__NAME,

    
    FIELD_RECORDTYPEID,
    
    FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__C,
    
    FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C,
    
    FIELD_COMPLIANCEQUEST__DOCUMENT_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__REVISION__C,
    
    FIELD_COMPLIANCEQUEST__TITLE__C,
    
    FIELD_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C,
    
    FIELD_COMPLIANCEQUEST__ORG_DIVISION__C,
    
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_SERVICE__C,
    
    FIELD_CQ_MS_SYSTEM_STANDARD__C,
    
    FIELD_COMPLIANCEQUEST__DESCRIPTION__C,
    
    FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C,
    
    FIELD_COMPLIANCEQUEST__DRAFT_VAULT__C,
    
    FIELD_COMPLIANCEQUEST__CONTENT_REFERENCE__C,
    
    FIELD_COMPLIANCEQUEST__RELEASE_VAULT__C,
    
    FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT__C,
    
    FIELD_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C,
    
    FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C,
    
    FIELD_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C,
    
    FIELD_COMPLIANCEQUEST__IS_SCORM_CONTENT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C,
    
    FIELD_COMPLIANCEQUEST__FIRST_APPROVER__C,
    
    FIELD_COMPLIANCEQUEST__SECOND_APPROVER__C,
    
    FIELD_COMPLIANCEQUEST__THIRD_APPROVER__C,
    
    FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__C,
    
    FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__C,
    
    
    
        
    
        
    FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME,
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__FIRST_APPROVER__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SECOND_APPROVER__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__THIRD_APPROVER__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__NAME,
        
    
];

const lookupDisplayFields = {
    
    "RecordTypeId": FIELD_RECORDTYPENAME,
    
    
        

        
    "compliancequest__Document_Type__c": FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__NAME,
    

        
    "compliancequest__SQX_Change_Order__c": FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__NAME,
    

        

        

        

        

        

        
    "compliancequest__SQX_Department__c": FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
    

        
    "compliancequest__SQX_Service__c": FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME,
    

        

        

        
    "compliancequest__SQX_Default_Approval_Matrix__c": FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__NAME,
    

        

        

        

        

        

        

        

        

        
    "compliancequest__SQX_Approval_Matrix__c": FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__NAME,
    

        
    "compliancequest__First_Approver__c": FIELD_COMPLIANCEQUEST__FIRST_APPROVER__NAME,
    

        
    "compliancequest__Second_Approver__c": FIELD_COMPLIANCEQUEST__SECOND_APPROVER__NAME,
    

        
    "compliancequest__Third_Approver__c": FIELD_COMPLIANCEQUEST__THIRD_APPROVER__NAME,
    

        
    "compliancequest__Fourth_Approver__c": FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__NAME,
    

        
    "compliancequest__Fifth_Approver__c": FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__NAME,
    

};

const LOOKUP_FILTERS = {"compliancequest__Document_Type__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","operator":"eq","isDynamic":false,"usv_param":"Name","value":"Template Document"}],"logic":"and"},"compliancequest__SQX_Approval_Matrix__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","usv_param":"DeveloperName","operator":"eq","value":"Controlled_Document"}],"logic":"and"},"compliancequest__SQX_Business_Unit__c":{"filters":[{"field":"compliancequest__SQX_Division__c","operator":"eq","dynamicValue":"compliancequest__SQX_Division__c","isDynamic":true}],"logic":"and"},"compliancequest__SQX_Default_Approval_Matrix__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","usv_param":"DeveloperName","operator":"eq","value":"Controlled_Document"}],"logic":"and"},"compliancequest__SQX_Site__c":{"filters":[{"field":"compliancequest__SQX_Business_Unit__c","operator":"eq","dynamicValue":"compliancequest__SQX_Business_Unit__c","isDynamic":true}],"logic":"and"}};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {};
const FORMULA_FIELDS = {};

export default class cquiCQMSDocControlledDocumentBoth  extends cquiControlledDocumentCreate {
    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_COMPLIANCEQUEST__SQX_CONTROLLED_DOCUMENT__C,fields,lookupDisplayFields);
        
        
        this.sectionHider = {"expando_unique_id_1":true,"expando_unique_id_2":true,"expando_unique_id_3":true,"expando_unique_id_4":true}

        // Extend rules
        this.lookupFilters = LOOKUP_FILTERS;
        this.dynamicSources = DYNAMIC_SOURCES;
        this.inputFormRules = FORM_RULES;
        this.systemFormRules = FORMULA_FIELDS;
        this.picklistValueSource = {
            
        };
        this.uiType = {};
        this.parentRecordApi="";
        
    }


    @api
    get recordId() {
        return this._recordId;
    }
    set recordId(value) {
        this._recordId = value;
        this.parentId = value;
    }

    // getters for field value, display value and field metadata
    
    get v_RECORDTYPEID() {
        return this.getValueFor(FIELD_RECORDTYPEID.fieldApiName);
    }
    get f_RECORDTYPEID() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_RECORDTYPEID.fieldApiName] : {};
        return val;
    }

    get d_RECORDTYPEID() {
        return lookupDisplayFields[FIELD_RECORDTYPEID.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_RECORDTYPEID.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DOCUMENT_TYPE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DOCUMENT_TYPE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DOCUMENT_TYPE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DOCUMENT_TYPE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CHANGE_ORDER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DOCUMENT_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DOCUMENT_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DOCUMENT_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DOCUMENT_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DOCUMENT_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DOCUMENT_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DOCUMENT_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__REVISION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__REVISION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__REVISION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__REVISION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__REVISION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__REVISION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__REVISION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__TITLE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__TITLE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__TITLE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__TITLE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DOCUMENT_CATEGORY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_DIVISION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_DIVISION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_DIVISION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_SERVICE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_SERVICE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_SERVICE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SERVICE__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_MS_SYSTEM_STANDARD__C() {
        return this.getValueFor(FIELD_CQ_MS_SYSTEM_STANDARD__C.fieldApiName);
    }
    get f_CQ_MS_SYSTEM_STANDARD__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_MS_SYSTEM_STANDARD__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_MS_SYSTEM_STANDARD__C() {
        return lookupDisplayFields[FIELD_CQ_MS_SYSTEM_STANDARD__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_MS_SYSTEM_STANDARD__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DESCRIPTION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DESCRIPTION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DESCRIPTION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEFAULT_APPROVAL_MATRIX__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DRAFT_VAULT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DRAFT_VAULT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DRAFT_VAULT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DRAFT_VAULT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DRAFT_VAULT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DRAFT_VAULT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DRAFT_VAULT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CONTENT_REFERENCE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CONTENT_REFERENCE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CONTENT_REFERENCE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CONTENT_REFERENCE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CONTENT_REFERENCE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CONTENT_REFERENCE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CONTENT_REFERENCE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__RELEASE_VAULT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__RELEASE_VAULT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__RELEASE_VAULT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__RELEASE_VAULT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__RELEASE_VAULT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__RELEASE_VAULT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__RELEASE_VAULT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SECONDARY_CONTENT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SECONDARY_CONTENT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SECONDARY_CONTENT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DISTRIBUTION_VAULT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECONDARY_CONTENT_REFERENCE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECONDARY_FORMAT_SETTING__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__IS_SCORM_CONTENT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__IS_SCORM_CONTENT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__IS_SCORM_CONTENT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__IS_SCORM_CONTENT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__IS_SCORM_CONTENT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__IS_SCORM_CONTENT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__IS_SCORM_CONTENT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_APPROVAL_MATRIX__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__FIRST_APPROVER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__FIRST_APPROVER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__FIRST_APPROVER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__FIRST_APPROVER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__FIRST_APPROVER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__FIRST_APPROVER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__FIRST_APPROVER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SECOND_APPROVER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SECOND_APPROVER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SECOND_APPROVER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SECOND_APPROVER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SECOND_APPROVER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECOND_APPROVER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SECOND_APPROVER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__THIRD_APPROVER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__THIRD_APPROVER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__THIRD_APPROVER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__THIRD_APPROVER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__THIRD_APPROVER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__THIRD_APPROVER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__THIRD_APPROVER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__FOURTH_APPROVER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__FOURTH_APPROVER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__FOURTH_APPROVER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__FOURTH_APPROVER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__FIFTH_APPROVER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__FIFTH_APPROVER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__FIFTH_APPROVER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__FIFTH_APPROVER__C.fieldApiName].fieldApiName);
    }

    


    
        
    get CQCQMSDOC_DOCUMENT_TYPE() {
        return CQCQMSDOC_DOCUMENT_TYPE;
    }
        
    
        
    get CQCQMSDOC_PROFILE() {
        return CQCQMSDOC_PROFILE;
    }
        
    
        
    get CQCQMSDOC_CONTENT() {
        return CQCQMSDOC_CONTENT;
    }
        
    
        
    get CQCQMSDOC_DOCUMENT_APPROVERS() {
        return CQCQMSDOC_DOCUMENT_APPROVERS;
    }
        
    
}