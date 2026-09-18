import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../config/env';

type Fixture = {
    loginPage: LoginPage;
    authenticated: void;
};

export const test = base.extend<Fixture>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    authenticated: async ({ page, loginPage }, use) => {

        await page.goto('/' , { waitUntil: 'domcontentloaded' });
        await loginPage.login(env.username, env.password);

        await use();
    }
});

export { expect };