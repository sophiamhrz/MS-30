import {api } from 'lwc';
import CqGridForm from 'c/cqGridForm';
import COMPLIANCEQUEST__SQX_ROOT_CAUSE__C from '@salesforce/schema/compliancequest__SQX_Root_Cause__c';


import FIELDS_PARENT_ID from '@salesforce/schema/compliancequest__SQX_Investigation__c.Id';

import FIELDS_PARENT_NAME from '@salesforce/schema/compliancequest__SQX_Investigation__c.Name';

import FIELDS_PARENT_COMPLIANCEQUEST__STATUS__C from '@salesforce/schema/compliancequest__SQX_Investigation__c.compliancequest__Status__c';





//import fields


import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_ID from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.Id';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_NAME from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.Name';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_CATEGORY__C from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Root_Cause_Category__c';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_CATEGORY__R_NAME from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Root_Cause_Category__r.Name';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_SUB_CATEGORY__C from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Root_Cause_Sub_Category__c';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_SUB_CATEGORY__R_NAME from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Root_Cause_Sub_Category__r.Name';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__VERIFIED__C from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__Verified__c';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_WHY__C from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Why__c';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_WHY__R_NAME from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Why__r.Name';

import FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_INVESTIGATION__C from '@salesforce/schema/compliancequest__SQX_Root_Cause__c.compliancequest__SQX_Investigation__c';


//import customlabels (Labels must not have space)

import CQMS_NEW from '@salesforce/label/c.CQMS_NEW';





//additonalFields added in query while fetching data
const additionalFields = [



];
const columns = [


    FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_ID,
                
            
    FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_CATEGORY__C,
                
            
    FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_SUB_CATEGORY__C,
                
            
    FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__VERIFIED__C,

        
    FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_WHY__C,
                
            
    
];

const parentFields = [

    FIELDS_PARENT_ID,

    FIELDS_PARENT_NAME,

    FIELDS_PARENT_COMPLIANCEQUEST__STATUS__C,

];

export default class cquiMsRootCauseCapaCustomGrid  extends CqGridForm {
    @api
    maxRows;

    @api
    maxColumns;

    @api
    gridType;

    @api
    flexipageRegionWidth;
    
    constructor() {
        super();
        this.fields = columns;
        this.columns = columns;
        this.mainObject = COMPLIANCEQUEST__SQX_ROOT_CAUSE__C;
        this.relationalField = FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_INVESTIGATION__C; //todo use this in import
        this.additionalFields = additionalFields;
        this.parentFields = parentFields;

        
        this.headerActions = [{"label": CQMS_NEW,"name":"std_new","componentName":"cqui-ms-root-cause-both"},];
        

        this.limitToRecordType = '';

        
        this.rowActions = [];
        

        
        this.rowFormRules = {};
        

        
        this.headerFormRules = {"std_new":{"fields":["compliancequest__Status__c","compliancequest__Status__c","compliancequest__Status__c"],"visible":"parent.compliancequest__Status__c.value != 'Completed'   && parent.compliancequest__Status__c.value != 'In Approval'   && parent.compliancequest__Status__c.value != 'Void'  "}};
        

        
        this.iconName = 'custom:custom70';
        
        
    
        this.lookupFields[FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_ID.fieldApiName] = FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_NAME;
                
        this.columnLabels[FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_ID.fieldApiName] = FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_NAME;
                
                
            
        this.lookupFields[FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_CATEGORY__C.fieldApiName] = FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_CATEGORY__R_NAME;
                
                
            
        this.lookupFields[FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_SUB_CATEGORY__C.fieldApiName] = FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_ROOT_CAUSE_SUB_CATEGORY__R_NAME;
                
                
            
        this.lookupFields[FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_WHY__C.fieldApiName] = FIELDS_COMPLIANCEQUEST__SQX_ROOT_CAUSE__C_COMPLIANCEQUEST__SQX_WHY__R_NAME;
                
                
            
        

        

        

        

        

        this.componentName="cquiMsRootCauseCapaCustomGrid";

    }

    connectedCallback(){
        this.maxRowsToDisplay = this.maxRows;
        this.maxColumnsToDisplay = this.maxColumns;
        this.gridDesktopView = this.gridType;
    }

    @api 
    get recordId() {
        return this._recordId;
    }

    set recordId(value) {
        this._recordId = value;
    }

}