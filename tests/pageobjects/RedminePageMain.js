const { expect } = require('@playwright/test');

exports.RedminePageMain = class RedminePageMain {

    constructor(page) {
        this.page = page;
        this.UserUp_a=page.locator('a.register');
        this.UserUp_login=page.locator("#user_login");
        this.UserUp_password=page.locator("#user_password");
        this.UserUp_confirmation=page.locator("#user_password_confirmation");
        this.UserUp_firstname=page.locator("#user_firstname");
        this.UserUp_lastname=page.locator("#user_lastname");
        this.UserUp_email=page.locator("#user_mail");
        this.UserUp_nick=page.locator("#user_custom_field_values_3");
        this.UserUp_submit=page.locator('input[name="commit"]');
        this.UserIn_a=page.locator('a.login');
        this.UserIn_login=page.locator("#username");
        this.UserIn_password=page.locator("#password");
        this.UserIn_submit=page.locator('input[name="login"]');
        this.UserIn_passrecovery=page.locator('a[href="/account/lost_password"]');
        this.UserRecoveryPass_submit=page.locator('input[type="submit"]');
        //this.signIn = page.$('.btn')
    }
    async goto(){
        await this.page.goto('https://redmine.org/');
    }
    async UserUpRight() {
        await this.UserUp_a.click();
        await this.UserUp_login.fill("Hextor235");
        await this.UserUp_password.fill("ERxV567B");
        await this.UserUp_firstname.fill("DudlDiDudlDam");
        await this.UserUp_lastname.fill("DamDidudu");
        await this.UserUp_email.fill("sorocofski288@gmail.com");
        await this.UserUp_nick.fill("XerbertYels");
        await this.UserUp_submit.click();
    }
    async UserUpError() {
        await this.UserUp_a.click();
        await this.UserUp_submit.click();
    }
    async UserInRight() {
        await this.UserIn_a.click();
        await this.UserIn_login.fill("Hextor235");
        await this.UserIn_password.fill("ERxV567B");
        await this.UserIn_submit.click();
    }
    async UserInError() {
        await this.UserIn_a.click();
        await this.UserIn_login.fill("!");
        await this.UserIn_password.fill("1111");
        await this.UserIn_submit.click();
    }
    async UserInPasswordRecovery() {
        await this.UserIn_a.click();
        await this.UserIn_passrecovery.click();
        await expect(this.page).toHaveURL('https://redmine.org/account/lost_password');
        await this.UserRecoveryPass_submit.click();
    }
}
