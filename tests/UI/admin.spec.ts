import { test, expect } from '../../fixtures/base.fixture';
import { AdminPage } from '../../pages/Admin';
import { env } from '../config/env';
test.describe("Admin User Management", () => {

    test("TC01 - Add Admin User", async ({ page , authenticated }) => {

        const adminPage = new AdminPage(page);

        await adminPage.navigateToAdmin();

        await adminPage.adduser();

        await adminPage.useRole("Admin");
        await adminPage.enterEmployeeName("John das");
        await adminPage.selectStatus("Enabled");
        await adminPage.adminusername("testadmin123");
        await adminPage.adminPassword("Admin@123");
        await adminPage.cnfrmPassword("Admin@123");

        await adminPage.saveUser();
    });


    test("TC02 - Search Admin User", async ({ page , authenticated}) => {

        const adminPage = new AdminPage(page);

        await adminPage.navigateToAdmin();
       const usernameCell = await adminPage.serachUser("FMLName1");

       await expect(usernameCell).toHaveText("FMLName1");

        
        

        
    });


    test("TC03 - Edit Admin User", async ({ page , authenticated }) => {

       const adminPage = new AdminPage(page);

      await adminPage.navigateToAdmin();
      

       await adminPage.editUser("Jobinsam@6742", "Jobinsam@6742");
     });


    test("TC04 - Delete Admin User", async ({ page, authenticated }) => {

        const adminPage = new AdminPage(page);

        await adminPage.navigateToAdmin();

        await adminPage.deleteUser("sebrina.krajcik");

        
        
    });

});