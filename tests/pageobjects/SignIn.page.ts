import { expect, Locator, Page } from '@playwright/test'

export class SignInPage{
    readonly signInBtn: Locator;
    readonly signInUsernameInput: Locator;
    readonly signInPasswordInput: Locator;
    readonly signInSubmitBtn: Locator;
    readonly signInPasswordRecoveryLink: Locator;
    readonly signInPasswordRecoverySubmitBtn: Locator;
    readonly userUpSuccessfulRegistrationMessage: Locator;
    readonly signInErrorMessage: Locator;

    
    constructor(readonly page:Page) {
        this.userUpSuccessfulRegistrationMessage=page.locator('#flash_notice');
        this.signInBtn=page.locator('a.login');
        this.signInUsernameInput=page.locator("#username");
        this.signInPasswordInput=page.locator("#password");
        this.signInSubmitBtn=page.locator('input[name="login"]');
        this.signInPasswordRecoveryLink=page.locator('a[href="/account/lost_password"]');
        this.signInPasswordRecoverySubmitBtn=page.locator('input[type="submit"]');
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
        await this.signInPasswordRecoveryLink.click();
        await this.signInPasswordRecoverySubmitBtn.click();
    }
}
