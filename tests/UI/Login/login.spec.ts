import{test, expect} from '../../../fixtures/base.fixture'
import { env } from '../../../config/env';
import path from 'path';
import { readExcel } from '../../../utils/ExcelReader';

//Excel file path
const filePath=path.join(__dirname , '../../../test-data/loginData.xlsx');

test.describe('Login Functionality' ,async ()=>{
    //To run in serial 
test.describe.configure({ mode: 'serial' });

 
 
 // Read Excel before tests start
    const loginData = readExcel(
    filePath,
    'loginData'
);


    for(const data of  loginData)
test(`Verify Invalid Login - ${data.TestCases}` ,
    {tag:['@login', '@negative','@sanity'],
        annotation:{type:'priority',
            description:'This is invalid login with all invalid credentials'}} ,
    async ({page ,loginPage}) => {
   await page.goto('/');

   //Get username and password from excel
   const username=String(data.Username || '');
   const password=String(data.Password || '');

   // Get expected result from Excel
   const expectedResult=String(data.Expected || '');

   //Login
   await loginPage.login(username , password);

   // Verify expected result from Excel
   await expect(page.getByText(expectedResult).first()).toBeVisible();

  
});
 test('Verify Valid Login',{tag:['@login','@positive' ,'@smoke'], annotation:{type:'priority',description: 'Tesing valid login with valid credentials'}}, 
    async({page , loginPage})=>{
 
await page.goto('/');

await loginPage.login(env.username , env.password);
await expect(page).toHaveURL(env.dashboardUrl);

});


});
