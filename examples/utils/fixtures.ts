import { test as base } from '@playwright/test';
import { Login } from './login_helpers';

type helpers = {
    login: Login;
}

const helpers = base.extend<helpers>({
    login: async ({ page }, use) => {
        await use(new Login(page));
    }
});

export const test = helpers;
export const expect = helpers.expect;