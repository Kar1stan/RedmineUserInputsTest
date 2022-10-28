import { expect, Locator, Page } from '@playwright/test'

export class LoginPage{
    readonly page: Page;
    readonly userInBtn: Locator;
    readonly userInUsernameInput: Locator;
    readonly userInPasswordInput: Locator;
    readonly userInSubmitBtn: Locator;
    readonly userInPassrecoveryLink: Locator;
    readonly userPassrecoverySubmitBtn: Locator;
    readonly userUpSuccessfulRegistrationMessage: Locator;
    readonly userInErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userUpSuccessfulRegistrationMessage=page.locator('#flash_notice');
        this.userInBtn=page.locator('a.login');
        this.userInUsernameInput=page.locator("#username");
        this.userInPasswordInput=page.locator("#password");
        this.userInSubmitBtn=page.locator('input[name="login"]');
        this.userInPassrecoveryLink=page.locator('a[href="/account/lost_password"]');
        this.userPassrecoverySubmitBtn=page.locator('input[type="submit"]');
        this.userInErrorMessage=page.locator('#flash_error');
        //this.signIn = page.$('.btn')
    }

    async goto(){
        await this.page.goto('https://redmine.org/');
    }

    async userInUsername(username:string){
        await this.userInUsernameInput.fill(username);
    }

    async userInPassword(password:string){
        await this.userInPasswordInput.fill(password);
    }

    async userInWrongUsername(wrong_username:string){
        await this.userInUsernameInput.fill(wrong_username);
    }

    async userInWrongPassword(wrong_password:string){
        await this.userInPasswordInput.fill(wrong_password);
    }

    async userInPasswordRecovery() {
        await this.userInBtn.click();
        await this.userInPassrecoveryLink.click();
        await this.userPassrecoverySubmitBtn.click();
    }
}
