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
       const usernameCell = await adminPage.serachUser("dfewcdwd");

       await expect(usernameCell).toHaveText("dfewcdwd");

        
        

        
    });


    test("TC03 - Edit Admin User", async ({ page , authenticated }) => {

       const adminPage = new AdminPage(page);

      await adminPage.navigateToAdmin();
      

       await adminPage.editUser("juanperez1", "juanperez1");
     });


    test("TC04 - Delete Admin User", async ({ page, authenticated }) => {

        const adminPage = new AdminPage(page);

        await adminPage.navigateToAdmin();

        await adminPage.deleteUser("KalyaniK2");

        
        
    });

});