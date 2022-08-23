// basic import
import { track, api} from 'lwc';
import cquiCapaCreate from 'c/cquiCapaCreate';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_COMPLIANCEQUEST__SQX_CAPA__C from '@salesforce/schema/compliancequest__SQX_CAPA__c';

import FIELD_COMPLIANCEQUEST__SQX_CAPA__C__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.Name';


import FIELD_RECORDTYPENAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.RecordType.Name';
import FIELD_RECORDTYPEDEVELOPERNAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.RecordType.DeveloperName';

// Field_<field api name without __c if present>

import FIELD_COMPLIANCEQUEST__CAPA_TYPE__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__CAPA_Type__c';

import FIELD_CQ_MS_CAPA_SUBTYPE__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.CQ_MS_CAPA_Subtype__c';

import FIELD_COMPLIANCEQUEST__TITLE__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Title__c';

import FIELD_COMPLIANCEQUEST__ISSUED_DATE__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Issued_Date__c';

import FIELD_COMPLIANCEQUEST__DESCRIPTION__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Description__c';

import FIELD_COMPLIANCEQUEST__TARGET_DUE_DATE__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Target_Due_Date__c';

import FIELD_COMPLIANCEQUEST__SQX_SERVICE__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_Service__c';

import FIELD_COMPLIANCEQUEST__RECOMMENDED_ACTION__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Recommended_Action__c';

import FIELD_COMPLIANCEQUEST__OPERATION__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Operation__c';

import FIELD_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__External_Reference_Number__c';

import FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_Account__c';

import FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_External_Contact__c';

import FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_CAPA_Coordinator__c';

import FIELD_COMPLIANCEQUEST__ORG_DIVISION__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Org_Division__c';

import FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_CAPA_Sponsor__c';

import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_Department__c';

import FIELD_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Effectiveness_Verification_Plan__c';

import FIELD_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__Effectiveness_Monitoring_Days__c';





// additional Field_<field api name without __c if present>



// Lookup fields Field_<field api name without __c if present>_<name field>


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_Service__r.Name';
    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_Account__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_External_Contact__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_CAPA_Coordinator__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_CAPA_Sponsor__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME from '@salesforce/schema/compliancequest__SQX_CAPA__c.compliancequest__SQX_Department__r.Name';
    


    


    



// import section custom label
    
        
import CQMS_DETAILS from '@salesforce/label/c.CQMS_DETAILS';
        
    
        
import CQMS_OWNERSHIP from '@salesforce/label/c.CQMS_OWNERSHIP';
        
    
        
import CQMS_EFFECTIVENESS_REVIEW from '@salesforce/label/c.CQMS_EFFECTIVENESS_REVIEW';
        
    
        
import CQMS_CUSTOM_LINKS from '@salesforce/label/c.CQMS_CUSTOM_LINKS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [

    FIELD_RECORDTYPENAME,
    FIELD_RECORDTYPEDEVELOPERNAME,
 

    FIELD_COMPLIANCEQUEST__SQX_CAPA__C__NAME,

    
    FIELD_COMPLIANCEQUEST__CAPA_TYPE__C,
    
    FIELD_CQ_MS_CAPA_SUBTYPE__C,
    
    FIELD_COMPLIANCEQUEST__TITLE__C,
    
    FIELD_COMPLIANCEQUEST__ISSUED_DATE__C,
    
    FIELD_COMPLIANCEQUEST__DESCRIPTION__C,
    
    FIELD_COMPLIANCEQUEST__TARGET_DUE_DATE__C,
    
    FIELD_COMPLIANCEQUEST__SQX_SERVICE__C,
    
    FIELD_COMPLIANCEQUEST__RECOMMENDED_ACTION__C,
    
    FIELD_COMPLIANCEQUEST__OPERATION__C,
    
    FIELD_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C,
    
    FIELD_COMPLIANCEQUEST__ORG_DIVISION__C,
    
    FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C,
    
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C,
    
    FIELD_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C,
    
    FIELD_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C,
    
    
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME,
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
        
    
        
    
        
    
];

const lookupDisplayFields = {
    
    "RecordTypeId": FIELD_RECORDTYPENAME,
    
    
        

        

        

        

        

        

        
    "compliancequest__SQX_Service__c": FIELD_COMPLIANCEQUEST__SQX_SERVICE__NAME,
    

        

        

        

        
    "compliancequest__SQX_Account__c": FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME,
    

        
    "compliancequest__SQX_External_Contact__c": FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME,
    

        
    "compliancequest__SQX_CAPA_Coordinator__c": FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__NAME,
    

        

        
    "compliancequest__SQX_CAPA_Sponsor__c": FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__NAME,
    

        
    "compliancequest__SQX_Department__c": FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
    

        

        

};

const LOOKUP_FILTERS = {"compliancequest__SQX_Approval_Matrix__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","usv_param":"DeveloperName","operator":"eq","value":"CAPA"}],"logic":"and"},"compliancequest__SQX_External_Contact__c":{"filters":[{"field":"AccountId","operator":"eq","dynamicValue":"compliancequest__SQX_Account__c","isDynamic":true}],"logic":"and"},"compliancequest__SQX_Finding__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","operator":"eq","isDynamic":false,"usv_param":"Name","value":"CAPA Finding"}],"logic":"and"},"compliancequest__SQX_Part__c":{"filters":[{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"}};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {};
const FORMULA_FIELDS = {};

export default class cquiMsCapaBoth  extends cquiCapaCreate {
    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_COMPLIANCEQUEST__SQX_CAPA__C,fields,lookupDisplayFields);
        
        
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
    
    get v_COMPLIANCEQUEST__CAPA_TYPE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CAPA_TYPE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CAPA_TYPE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CAPA_TYPE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CAPA_TYPE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CAPA_TYPE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CAPA_TYPE__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_MS_CAPA_SUBTYPE__C() {
        return this.getValueFor(FIELD_CQ_MS_CAPA_SUBTYPE__C.fieldApiName);
    }
    get f_CQ_MS_CAPA_SUBTYPE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_MS_CAPA_SUBTYPE__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_MS_CAPA_SUBTYPE__C() {
        return lookupDisplayFields[FIELD_CQ_MS_CAPA_SUBTYPE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_MS_CAPA_SUBTYPE__C.fieldApiName].fieldApiName);
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

    
    get v_COMPLIANCEQUEST__ISSUED_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ISSUED_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ISSUED_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ISSUED_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ISSUED_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ISSUED_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ISSUED_DATE__C.fieldApiName].fieldApiName);
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

    
    get v_COMPLIANCEQUEST__TARGET_DUE_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__TARGET_DUE_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__TARGET_DUE_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__TARGET_DUE_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__TARGET_DUE_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__TARGET_DUE_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__TARGET_DUE_DATE__C.fieldApiName].fieldApiName);
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

    
    get v_COMPLIANCEQUEST__RECOMMENDED_ACTION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__RECOMMENDED_ACTION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__RECOMMENDED_ACTION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__RECOMMENDED_ACTION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__RECOMMENDED_ACTION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__RECOMMENDED_ACTION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__RECOMMENDED_ACTION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__OPERATION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__OPERATION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__OPERATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__OPERATION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__OPERATION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__OPERATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__OPERATION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__EXTERNAL_REFERENCE_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CAPA_COORDINATOR__C.fieldApiName].fieldApiName);
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

    
    get v_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CAPA_SPONSOR__C.fieldApiName].fieldApiName);
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

    
    get v_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__EFFECTIVENESS_VERIFICATION_PLAN__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__EFFECTIVENESS_MONITORING_DAYS__C.fieldApiName].fieldApiName);
    }

    


    
        
    get CQMS_DETAILS() {
        return CQMS_DETAILS;
    }
        
    
        
    get CQMS_OWNERSHIP() {
        return CQMS_OWNERSHIP;
    }
        
    
        
    get CQMS_EFFECTIVENESS_REVIEW() {
        return CQMS_EFFECTIVENESS_REVIEW;
    }
        
    
        
    get CQMS_CUSTOM_LINKS() {
        return CQMS_CUSTOM_LINKS;
    }
        
    
}