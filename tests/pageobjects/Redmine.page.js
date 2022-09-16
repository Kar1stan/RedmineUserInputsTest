const { expect } = require('@playwright/test');

exports.RedmineMainPage = class RedmineMainPage {

    constructor(page) {
        this.page = page;
        this.userUpa=page.locator('a.register');
        this.userUplogin=page.locator("#user_login");
        this.userUppassword=page.locator("#user_password");
        this.userUpconfirmation=page.locator("#user_password_confirmation");
        this.userUpfirstname=page.locator("#user_firstname");
        this.userUplastname=page.locator("#user_lastname");
        this.userUpemail=page.locator("#user_mail");
        this.userUpnick=page.locator("#user_custom_field_values_3");
        this.userUpsubmit=page.locator('input[name="commit"]');
        this.userIna=page.locator('a.login');
        this.userInlogin=page.locator("#username");
        this.userInpassword=page.locator("#password");
        this.userInsubmit=page.locator('input[name="login"]');
        this.userInpassrecovery=page.locator('a[href="/account/lost_password"]');
        this.userRecoveryPasssubmit=page.locator('input[type="submit"]');
        //this.signIn = page.$('.btn')
    }
    async goto(){
        await this.page.goto('https://redmine.org/');
    }
    async userUpRight() {
        await this.userUpa.click();
        await this.userUplogin.fill("Hextor235");
        await this.userUppassword.fill("ERxV567B");
        await this.userUpfirstname.fill("DudlDiDudlDam");
        await this.userUplastname.fill("DamDidudu");
        await this.userUpemail.fill("sorocofski288@gmail.com");
        await this.userUpnick.fill("XerbertYels");
        await this.userUpsubmit.click();
    }
    async userUpError() {
        await this.userUpa.click();
        await this.userUpsubmit.click();
    }
    async userInRight() {
        await this.userIna.click();
        await this.userInlogin.fill("Hextor235");
        await this.userInpassword.fill("ERxV567B");
        await this.userInsubmit.click();
    }
    async userInError() {
        await this.userIna.click();
        await this.userInlogin.fill("!");
        await this.userInpassword.fill("1111");
        await this.userInsubmit.click();
    }
    async userInPasswordRecovery() {
        await this.userIna.click();
        await this.userInpassrecovery.click();
        await this.userRecoveryPasssubmit.click();
    }
}
