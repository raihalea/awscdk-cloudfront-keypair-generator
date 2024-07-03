import * as cdk from "aws-cdk-lib";
import { CloudFrontKeyPairGenerator } from "./utils/cloudfront-keypair-generator";
import { Construct } from "constructs";
import { Distribution, KeyGroup, PublicKey } from "aws-cdk-lib/aws-cloudfront";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";

export class AwscdkCloudfrontKeypairGeneratorStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const cfKeyPair = new CloudFrontKeyPairGenerator(
      this,
      "CloudFrontKeyPairGenerator"
    );

    const cfPublicKey = cfKeyPair.publicKey;
    // const cfPrivateKeyParameter = cfKeyPair.privateKeyParameter;

    const publicKey = PublicKey.fromPublicKeyId(
      this,
      "CloudFrontPublicKey",
      cfPublicKey.publicKeyId
    );

    const keyGroup = new KeyGroup(this, "KeyGroup", {
      items: [publicKey],
    });

    const distribution = new Distribution(this, "Distribution", {
      defaultBehavior: {
        origin: new HttpOrigin("example.com"),
        trustedKeyGroups: [keyGroup],
      },
    });
  }
}
