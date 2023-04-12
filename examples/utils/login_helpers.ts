import { Locator, Page } from '@playwright/test'

export class Login {
    readonly page: Page;
    readonly loginURL = "https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Wikipedia%3AStrona+główna";
    readonly url = "https://pl.wikipedia.org/wiki/Wikipedia:Strona_główna";
    readonly username = "TestOpera";
    readonly password = "Playwright";
    readonly usernamelInput: Locator;
    readonly passwordInput: Locator;
    readonly button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernamelInput = page.locator("#wpName1");
        this.passwordInput = page.locator("#wpPassword1");
        this.button = page.locator('#wpLoginAttempt');
    }

    async goToLoginPage() {
        await this.page.goto(this.loginURL);
    }

    async goToMainPage() {
        await this.page.goto(this.url);
    }

    async login() {
        await this.usernamelInput.fill(this.username);
        await this.passwordInput.fill(this.password);
        await this.button.click();
        await this.page.waitForSelector('#main-page-welcome');
    }
}