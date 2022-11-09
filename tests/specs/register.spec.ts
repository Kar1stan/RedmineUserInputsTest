import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pageobjects/Register.page';
import { MainPage } from '../pageobjects/MainPage.page';

test.describe('RedmineTest Register', () => {

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
});

test('Should register with valid credentials', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.clickRegisterBtn();
  await registerPage.registerLogin(registerPage.login);
  await registerPage.registerPassword(registerPage.password);
  await registerPage.registerPasswordConfirmation(registerPage.password);
  await registerPage.registerName(registerPage.name);
  await registerPage.registerSurname(registerPage.surname);
  await registerPage.registerEmail(registerPage.email+"@email.com");
  await registerPage.registerIRCnick(registerPage.irc);
  await registerPage.clickRegisterSubmitBtn();
  await expect(page).toHaveURL('https://www.redmine.org/login');
});

test('Should register with empty credentials', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.clickRegisterBtn();
  await registerPage.clickRegisterSubmitBtn();
  await expect(page).toHaveURL('https://www.redmine.org/account/register');
  await expect(registerPage.registerErrorExplanationMessage).toBeVisible();
});

});
