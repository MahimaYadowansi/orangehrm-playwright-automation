import{ Locator, Page} from '@playwright/test'

export class LoginPage {

    //Page
    readonly page:Page;

    //Locators
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.usernameInput=page.getByPlaceholder('Username');
        this.passwordInput=page.getByPlaceholder('Password');
        this.loginBtn=page.getByRole('button', { name: 'Login' });

    }    

    //Enter Username
    async enterUsername(username:string)
    {
        await this.usernameInput.fill(username);
    }

    //Enter Password
    async enterPassword(password:string)
    {
        await this.passwordInput.fill(password);
    }

    //Click Login

    async clickLogin()
    {
        await this.loginBtn.click();
    }


    //Complete login

    async login(username:string , password:string)
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}