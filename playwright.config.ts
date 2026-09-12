import { defineConfig, devices } from "@playwright/test";
import { env } from "./config/env";

export default defineConfig ({

testDir: './tests',
reporter : [
  ['html' , {
    outputFolder: 'reports/html',
    open: 'always',
  }]
],

use: {
  baseURL: env.baseUrl,
  screenshot : 'on' ,
  video : 'off' ,
  trace : 'retain-on-failure',
  headless : false
},

projects: [
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome']
    }
  }

],

});