import { Locator, Page } from '@playwright/test'

export class Server {
    readonly page: Page;
    readonly url = "http://127.0.0.1:5000";
    readonly username = "admin";
    readonly password = "admin123";
    readonly usernamelInput: Locator;
    readonly passwordInput: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernamelInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.button = page.locator('#button');
    }

    async goToLoginPage() {
        await this.page.goto(this.url);
    }

    async goToMainPage() {
        await this.page.goto(this.url);
    }

    async login() {
        await this.usernamelInput.fill(this.username);
        await this.passwordInput.fill(this.password);
        await this.page.waitForTimeout(3000);
        await this.button.click();
        await this.page.waitForSelector('h1')
    }
}