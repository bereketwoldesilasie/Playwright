import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
 testMatch:["tests/login.test.ts"],
 use:{
  headless:false,
  screenshot:"only-on-failure",
  video:"retain-on-failure"
 },
 reporter:[["dot"],["json",{
  outputFile:"jsonReports/JsonReport.json"
 }],["html",{
  open:"never"
 }]]
});
 