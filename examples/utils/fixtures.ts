import { test as base } from '@playwright/test';
import { Login } from './login_helpers';
import { Server } from './server_helpers';

type helpers = {
    login: Login;
    server: Server;
}

const helpers = base.extend<helpers>({
    login: async ({ page }, use) => {
        await use(new Login(page));
    },
    server: async ({ page }, use) => {
        await use(new Server(page));
    }
});

export const test = helpers;
export const expect = helpers.expect;