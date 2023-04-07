import { Locator, Page } from '@playwright/test'

export class Login {
    readonly page: Page;
    readonly url = "https://authenticationtest.com/simpleFormAuth/";
    readonly username = "admin";
    readonly password = "admin123";
    readonly usernamelInput: Locator;
    readonly passwordInput: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernamelInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.button = page.locator("#button");
    }

    async goToLoginPage() {
        await this.page.goto('/');
      }

    async login(){
        await this.usernamelInput.fill(this.username);
        await this.passwordInput.fill(this.password);
        await this.button.click();
    }
}