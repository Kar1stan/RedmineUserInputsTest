import { expect, Locator, Page } from '@playwright/test'

export class SignInPage{
    readonly page: Page;
    readonly signInBtn: Locator;
    readonly signInUsernameInput: Locator;
    readonly signInPasswordInput: Locator;
    readonly signInSubmitBtn: Locator;
    readonly signInPassrecoveryLink: Locator;
    readonly userPassrecoverySubmitBtn: Locator;
    readonly userUpSuccessfulRegistrationMessage: Locator;
    readonly signInErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userUpSuccessfulRegistrationMessage=page.locator('#flash_notice');
        this.signInBtn=page.locator('a.login');
        this.signInUsernameInput=page.locator("#username");
        this.signInPasswordInput=page.locator("#password");
        this.signInSubmitBtn=page.locator('input[name="login"]');
        this.signInPassrecoveryLink=page.locator('a[href="/account/lost_password"]');
        this.userPassrecoverySubmitBtn=page.locator('input[type="submit"]');
        this.signInErrorMessage=page.locator('#flash_error');
    }


    async clickSignInBtn(){
        await this.signInBtn.click();
    }

    async fillUsername(username:string){
        await this.signInUsernameInput.fill(username);
    }

    async fillPassword(password:string){
        await this.signInPasswordInput.fill(password);
    }

    async clickSignInSubmitBtn(){
        await this.signInSubmitBtn.click();
    }

    async clickPasswordRecovery() {
        await this.signInBtn.click();
        await this.signInPassrecoveryLink.click();
        await this.userPassrecoverySubmitBtn.click();
    }
}
