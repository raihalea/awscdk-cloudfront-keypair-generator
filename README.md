# AWS CDK CloudFront KeyPair Generator

Welcome to the whimsical world of AWS CDK, where we showcase a unique and not-so-conventional approach to generating CloudFront KeyPairs using EC2 KeyPairs. This project is more of a tech experiment, demonstrating the flexibility of AWS services, rather than a best practice recommendation. Enjoy the creativity!

## Overview

This project is a playful exploration of AWS CDK capabilities. It includes:

1. **AwscdkCloudfrontKeypairGeneratorStack**: The main stack that sets up a CloudFront distribution and associates it with a KeyGroup containing a public key.
2. **CloudFrontKeyPairGenerator**: A custom construct that generates an EC2 KeyPair and creates a public key parameter for CloudFront.

### Why This Approach?

Traditionally, CloudFront KeyPairs are generated using the AWS Management Console or CLI specifically for CloudFront signed URLs and cookies. Here, we're creatively using EC2 KeyPairs to achieve the same goal, showcasing the versatility and power of AWS CDK and AWS services in a fun and unconventional way.

## File Structure

- `lib/awscdk-cloudfront-keypair-generator-stack.ts`: Defines the main stack.
- `lib/utils/cloudfront-keypair-generator.ts`: Defines the custom construct for generating the CloudFront KeyPair.

## Usage

### CloudFrontKeyPairGenerator Construct

The `CloudFrontKeyPairGenerator` construct handles the creation of the EC2 KeyPair and the CloudFront public key parameter. It uses a Lambda function to manage the private key securely using AWS Systems Manager Parameter Store (SSM).

### AwscdkCloudfrontKeypairGeneratorStack

The `AwscdkCloudfrontKeypairGeneratorStack` creates a CloudFront distribution and associates it with a KeyGroup that contains the public key generated by the `CloudFrontKeyPairGenerator` construct.

### Prerequisites

- AWS CDK v2
- Node.js

### Deployment

To deploy the stack, run the following commands:

```bash
npm install
cdk deploy
```

## Important Note

**Disclaimer:** **Disclaimer:** This project is for fun and learning. Using EC2 KeyPairs for CloudFront KeyPairs is not a recommended or supported practice in production environments.  
It’s a fun demonstration of what’s possible with AWS CDK, but for real-world applications, please follow the standard best practices for CloudFront KeyPairs.


## License

see ./LICENSE