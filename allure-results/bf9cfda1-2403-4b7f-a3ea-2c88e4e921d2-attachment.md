# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\admin.spec.ts >> Admin User Management >> TC02 - Search Admin User
- Location: tests\UI\admin.spec.ts:25:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//div[@role=\'table\']').locator('[role=\'row\']').filter({ hasText: 'FMLName' }).locator('[role=\'cell\']').nth(1)
Expected: "FMLName"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//div[@role=\'table\']').locator('[role=\'row\']').filter({ hasText: 'FMLName' }).locator('[role=\'cell\']').nth(1) with timeout 5000ms
  - waiting for locator('//div[@role=\'table\']').locator('[role=\'row\']').filter({ hasText: 'FMLName' }).locator('[role=\'cell\']').nth(1)

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (14) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " amelia.brown.1790180049072 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "amelia.brown.1790180049072"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " AutoUser1790179960255 Admin manda user Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AutoUser1790179960255"
      - cell "Admin"
      - cell "manda user"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " AutoUser1790180531937 Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AutoUser1790180531937"
      - cell "Admin"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " dfewcdwd ESS manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfewcdwd"
      - cell "ESS"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " disposable.user.1790180078301 Admin 123445 444444 Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "disposable.user.1790180078301"
      - cell "Admin"
      - cell "123445 444444"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " e2e_m4b1r_edit_1790182028 Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "e2e_m4b1r_edit_1790182028"
      - cell "Admin"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " e2e_m4b1r_user_1790182028 ESS manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "e2e_m4b1r_user_1790182028"
      - cell "ESS"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " johndoe_emp-98bf ESS John_emp-98bf Doe_emp-98bf Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "johndoe_emp-98bf"
      - cell "ESS"
      - cell "John_emp-98bf Doe_emp-98bf"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " johndoe_emp-ddcd ESS John_emp-ddcd Doe_emp-ddcd Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "johndoe_emp-ddcd"
      - cell "ESS"
      - cell "John_emp-ddcd Doe_emp-ddcd"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " KalyaniK2 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "KalyaniK2"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Rajesh1790180020017 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Rajesh1790180020017"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Rajesh1790180168727 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Rajesh1790180168727"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Tester ESS savi g Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Tester"
      - cell "ESS"
      - cell "savi g"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/base.fixture';
  2  | import { AdminPage } from '../../pages/Admin';
  3  | import { env } from '../config/env';
  4  | test.describe("Admin User Management", () => {
  5  | 
  6  |     test("TC01 - Add Admin User", async ({ page , authenticated }) => {
  7  | 
  8  |         const adminPage = new AdminPage(page);
  9  | 
  10 |         await adminPage.navigateToAdmin();
  11 | 
  12 |         await adminPage.adduser();
  13 | 
  14 |         await adminPage.useRole("Admin");
  15 |         await adminPage.enterEmployeeName("John das");
  16 |         await adminPage.selectStatus("Enabled");
  17 |         await adminPage.adminusername("testadmin123");
  18 |         await adminPage.adminPassword("Admin@123");
  19 |         await adminPage.cnfrmPassword("Admin@123");
  20 | 
  21 |         await adminPage.saveUser();
  22 |     });
  23 | 
  24 | 
  25 |     test("TC02 - Search Admin User", async ({ page , authenticated}) => {
  26 | 
  27 |         const adminPage = new AdminPage(page);
  28 | 
  29 |         await adminPage.navigateToAdmin();
  30 |        const usernameCell = await adminPage.serachUser("FMLName");
  31 | 
> 32 |        await expect(usernameCell).toHaveText("FMLName");
     |                                   ^ Error: expect(locator).toHaveText(expected) failed
  33 | 
  34 |         
  35 |         
  36 | 
  37 |         
  38 |     });
  39 | 
  40 | 
  41 |     test("TC03 - Edit Admin User", async ({ page , authenticated }) => {
  42 | 
  43 |        const adminPage = new AdminPage(page);
  44 | 
  45 |       await adminPage.navigateToAdmin();
  46 |       
  47 | 
  48 |        await adminPage.editUser("Hello", "HelloV");
  49 |      });
  50 | 
  51 | 
  52 |     test("TC04 - Delete Admin User", async ({ page, authenticated }) => {
  53 | 
  54 |         const adminPage = new AdminPage(page);
  55 | 
  56 |         await adminPage.navigateToAdmin();
  57 | 
  58 |         await adminPage.deleteUser("abdullahJ");
  59 | 
  60 |         
  61 |         
  62 |     });
  63 | 
  64 | });
```