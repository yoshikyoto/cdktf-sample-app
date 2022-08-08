import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'aws', {
      region: 'ap-northeast-1',
    })

    new S3Bucket(this, 'cdktf-test', {
      bucket: 'cdktf-test-sakamoto',
    })
  }
}

const app = new App();
new MyStack(app, "cdktf-sample-app");
app.synth();
