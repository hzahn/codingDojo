# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


# Setup

* create aws account
* create iam user with access rigths for Stack deployment
* install aws-cli
* run `aws configure` and setup deployment user (region = eu-central-1 and output = json)
* install npm
* `npm install aws-cdk` 
* change code
* deploy
** `npm run build` or `npm run watch`
** `cdk synth`
** `cdk diff` 
** `cdk deploy`