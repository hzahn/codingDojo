#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { DojoCdkStack } from '../lib/dojo_cdk-stack';

const app = new cdk.App();
new DojoCdkStack(app, 'DojoCdkStack');