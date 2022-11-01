import { expect, Locator, Page } from '@playwright/test'

export class UserupPage{
    readonly page: Page;
    readonly userUpBtn: Locator;
    readonly userUpLoginInput: Locator;
    readonly userUpPasswordInput: Locator;
    readonly userUpPasswordConfirmationInput: Locator;
    readonly userUpNameInput: Locator;
    readonly userUpSurnameInput: Locator;
    readonly userUpEmailInput: Locator;
    readonly userUpIRCnickInput: Locator;
    readonly userUpSubmitBtn: Locator;
    readonly userUpErrorExplanationMessage: Locator;
    readonly userUpSuccessfulRegistrationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userUpBtn=page.locator('a.register');
        this.userUpLoginInput=page.locator("#user_login");
        this.userUpPasswordInput=page.locator("#user_password");
        this.userUpPasswordConfirmationInput=page.locator("#user_password_confirmation");
        this.userUpNameInput=page.locator("#user_firstname");
        this.userUpSurnameInput=page.locator("#user_lastname");
        this.userUpEmailInput=page.locator("#user_mail");
        this.userUpIRCnickInput=page.locator("#user_custom_field_values_3");
        this.userUpSubmitBtn=page.locator('input[name="commit"]');
        this.userUpErrorExplanationMessage=page.locator('#errorExplanation');
        this.userUpSuccessfulRegistrationMessage=page.locator('#flash_notice');
        //this.signIn = page.$('.btn')
    }

    async goto(){
        await this.page.goto('https://redmine.org/');
    }

    async userUpLogin(login:string){
        await this.userUpLoginInput.fill(login);
    }

    async userUpPassword(password:string){
        await this.userUpPasswordInput.fill(password);
    }

    async userUpPasswordConfirmation(password:string){
        await this.userUpPasswordConfirmationInput.fill(password);
    }

    async userUpName(name:string){
        await this.userUpNameInput.fill(name);
    }

    async userUpSurname(surname:string){
        await this.userUpSurnameInput.fill(surname);
    }

    async userUpEmail(email:string){
        await this.userUpEmailInput.fill(email);
    }

    async userUpIRCnick(IRC:string){
        await this.userUpIRCnickInput.fill(IRC);
    }

    async userUpWithEmptyCredentials() {
        await this.userUpBtn.click();
        await this.userUpSubmitBtn.click();
    }

}
