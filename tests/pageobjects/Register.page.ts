import { expect, Locator, Page } from '@playwright/test'

export class RegisterPage{
    readonly registerBtn: Locator;
    readonly registerLoginInput: Locator;
    readonly registerPasswordInput: Locator;
    readonly registerPasswordConfirmationInput: Locator;
    readonly registerNameInput: Locator;
    readonly registerSurnameInput: Locator;
    readonly registerEmailInput: Locator;
    readonly registerIRCnickInput: Locator;
    readonly registerSubmitBtn: Locator;
    readonly registerErrorExplanationMessage: Locator;
    readonly registerSuccessfulRegistrationMessage: Locator;
    readonly password: string;
    readonly login: string;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly irc: string;

    constructor(readonly page:Page){
        this.registerBtn=page.locator('a.register');
        this.registerLoginInput=page.locator("#user_login");
        this.registerPasswordInput=page.locator("#user_password");
        this.registerPasswordConfirmationInput=page.locator("#user_password_confirmation");
        this.registerNameInput=page.locator("#user_firstname");
        this.registerSurnameInput=page.locator("#user_lastname");
        this.registerEmailInput=page.locator("#user_mail");
        this.registerIRCnickInput=page.locator("#user_custom_field_values_3");
        this.registerSubmitBtn=page.locator('input[name="commit"]');
        this.registerErrorExplanationMessage=page.locator('#errorExplanation');
        this.registerSuccessfulRegistrationMessage=page.locator('#flash_notice');
        this.password=Math.random().toString(36).substring(2,9);
        this.login=Math.random().toString(36).substring(2,10);
        this.name=Math.random().toString(36).substring(2,8);
        this.surname=Math.random().toString(36).substring(2,8);
        this.email=Math.random().toString(36).substring(2,8)+"@mail.com";
        this.irc=Math.random().toString(36).substring(2,7);
    }

    async clickRegisterBtn(){
        await this.registerBtn.click();
    }

    async fillLogin(login:string){
        await this.registerLoginInput.fill(login);
    }

    async fillPassword(password:string){
        await this.registerPasswordInput.fill(password);
    }

    async fillPasswordConfirmation(password:string){
        await this.registerPasswordConfirmationInput.fill(password);
    }

    async fillName(name:string){
        await this.registerNameInput.fill(name);
    }

    async fillSurname(surname:string){
        await this.registerSurnameInput.fill(surname);
    }

    async fillEmail(email:string){
        await this.registerEmailInput.fill(email);
    }

    async fillIRCnick(IRC:string){
        await this.registerIRCnickInput.fill(IRC);
    }

    async clickRegisterSubmitBtn(){
        await this.registerSubmitBtn.click();
    }

    async registerWithEmptyCredentials() {
        await this.registerBtn.click();
        await this.registerSubmitBtn.click();
    }

}
