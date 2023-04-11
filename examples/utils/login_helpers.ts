import { Locator, Page } from '@playwright/test'

export class Login {
    readonly page: Page;
    readonly url = "https://the-internet.herokuapp.com/login";
    readonly username = "tomsmith";
    readonly password = "SuperSecretPassword!";
    readonly usernamelInput: Locator;
    readonly passwordInput: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernamelInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.button = page.locator('button[class*="radius"]');
    }

    async goToLoginPage() {
        await this.page.goto(this.url);
      }

    async login(){
        await this.usernamelInput.fill(this.username);
        await this.passwordInput.fill(this.password);
        await this.button.click();
    }
}