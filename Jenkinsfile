node{
    def SF_CONSUMER_KEY=env.SF_CONSUMER_KEY
    def SF_USERNAME=env.SF_USERNAME
    def SERVER_KEY_CREDENTALS_ID=env.SERVER_KEY_CREDENTALS_ID
    def SF_DEV_HUB_ALIAS=env.SF_DEV_HUB_ALIAS
    def SF_SCRATCH_ALIAS=env.SF_SCRATCH_ALIAS
    def SF_INSTANCE_URL = env.SF_INSTANCE_URL ?: "https://login.salesforce.com"
    def PKG_PATH = "sfdx-source/force-app"
    def PKG = "force-app"
    def BRANCH_NAME = env.BRANCH_NAME
    println 'Key is'
    println SF_CONSUMER_KEY
    println SERVER_KEY_CREDENTALS_ID
    println SF_USERNAME
    println SF_DEV_HUB_ALIAS
    println SF_INSTANCE_URL

    stage('checkout source') {
        checkout scm
    }
    
    stage('Identify Branch'){
        //checking if it is feature branch or not 
        def branchName=BRANCH_NAME.split('/');
        if(branchName[0] != 'feature'){
            currentBuild.result = 'FAILED'
            error('Branch name not matched as expected pattern. Expected pattern is: feature/ms . #Exit');
            return 
        }else{
            echo('Branch name matched as expected pattern.#Continue');
            }
        }

  
    withCredentials([file(credentialsId: SERVER_KEY_CREDENTALS_ID, variable: 'server_key_file')]) {
        //jwt authentication
        stage('Authorize DevHub') {
            try{
                rc = sh "sfdx force:auth:jwt:grant --instanceurl ${SF_INSTANCE_URL} --clientid ${SF_CONSUMER_KEY} --username ${SF_USERNAME} --jwtkeyfile ${server_key_file} --setdefaultdevhubusername --setalias ${SF_DEV_HUB_ALIAS}"             
            }
            catch(exception){
                if(exception){
                currentBuild.result = "FAILED"
                throw exception
                  }
            }
         }
    stage("Validate Main Package"){
        try{
            rc = sh "cd sfdx-source && sfdx force:source:deploy -p ${PKG} -w 100 -u ${SF_USERNAME} --testlevel RunLocalTests -c"
            }catch(exception){
                // Since we are using try..catch block have to fail the build manually
                if(exception){
                    currentBuild.result = "FAILED"
                throw exception
                }
            }
        }
        }

}