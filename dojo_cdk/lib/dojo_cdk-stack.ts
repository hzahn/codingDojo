import apigateway = require('@aws-cdk/aws-apigateway');
import lambda = require('@aws-cdk/aws-lambda');
import cdk = require('@aws-cdk/cdk');

export class DojoCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const apiFunction = new lambda.Function(this, 'ApiFunction', {

      runtime: lambda.Runtime.Python36,

      handler: 'index.handler',

      code: lambda.Code.inline("def handler(event, context):\n  return({'body': 'Hello World', 'statusCode': 200, 'headers': {}, 'isBase64Encoded': False})")

    });

    // api

    const api = new apigateway.LambdaRestApi(this, 'Hello', {

      handler: apiFunction,

      proxy: false

    });

    const hello_api = api.root.addResource('hi');

    hello_api.addMethod('GET');

  }
}
