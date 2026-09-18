import { Page ,Locator } from "@playwright/test";

export class AdminPage{

   //Add user
   readonly admin:Locator | undefined;
   readonly add_user: Locator;
    readonly page:Page;
    readonly admin_username: Locator;
    readonly userRoleDropdown:Locator;
    readonly user_role:Locator;
    readonly employee_Name:Locator;
    readonly status_dropdown:Locator;
    readonly user_status:Locator;
    readonly user_password: Locator;
    readonly cnfrm_password: Locator;
    readonly user_savebtn: Locator;
    

    //search admin
    readonly search_user:Locator;
    readonly serach_userbtn:Locator;

    //



 constructor(page:Page)
 {
    this.page=page;
   this.admin=page.locator("//span[text()='Admin']")
    this.add_user=page.locator("//button[@type='button' and @class='oxd-button oxd-button--medium oxd-button--secondary']");
    this.userRoleDropdown=page.locator("(//div[@class='oxd-select-text-input'])[1]");
    // this.userRoleDropdown = page
    //         .locator("label")
    //         .filter({ hasText: "User Role" })
    //         .locator("..")
    //         .getByText("-- Select --");
    this.user_role = page.locator(".oxd-select-dropdown").getByText("Admin", { exact: true });
    this.employee_Name=page.getByPlaceholder("Type for hints...");
    this.status_dropdown=page.locator("(//div[@class='oxd-select-text-input'])[2]");
    // this.status_dropdown = page
    //         .locator("label")
    //         .filter({ hasText: "Status" })
    //         .locator("..")
    //         .getByText("-- Select --");
    this.user_status=page.getByText("Enabled");
    
    this.admin_username = page
    .locator(".oxd-input-group")
    .filter({ hasText: /^Username$/ })
    .locator("input");
    

    //this.user_password=page.locator("//input[@type='password' and @class='oxd-input oxd-input--focus']");
    this.user_password = page
    .locator(".oxd-input-group")
    .filter({ hasText: /^Password$/ })
    .locator("input");
    //this.cnfrm_password=page.locator("//input[@type='password' and @class='oxd-input oxd-input--focus']");
    this.cnfrm_password = page
    .locator(".oxd-input-group")
    .filter({ hasText: /^Confirm Password$/ })
    .locator("input");
    this.user_savebtn=page.locator("//button[@type='submit' ]");
    //search
    this.serach_userbtn=page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']");
    this.search_user=page.locator("//input[@class='oxd-input oxd-input--focus']");
  }
 
 async navigateToAdmin()
 {
  await this.admin.click();
 }
  async adduser()
  {
   await this.add_user.click();
  }

  async useRole(userRole: string) {
    await this.userRoleDropdown.click();
    await this.user_role.click();
}


async selectStatus(status: string)
{
   await this.status_dropdown.click();
   await this.user_status.click();
}

 async enterEmployeeName(name: string) {

   await this.employee_Name.fill(name);
 }
async adminusername(adminUsername:string)
{
 await this.admin_username.fill(adminUsername);
}

async adminPassword(adminPassword:string)
{
   await this.user_password.fill(adminPassword)
}

async cnfrmPassword(cnfrmPassword:string)
{
   await this.cnfrm_password.fill(cnfrmPassword)

 }

 async saveUser() {

   await this.user_savebtn.click();
 }




}