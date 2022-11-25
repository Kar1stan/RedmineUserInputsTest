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
  await registerPage.fillLogin(registerPage.login);
  await registerPage.fillPassword(registerPage.password);
  await registerPage.fillPasswordConfirmation(registerPage.password);
  await registerPage.fillName(registerPage.name);
  await registerPage.fillSurname(registerPage.surname);
  await registerPage.fillEmail(registerPage.email);
  await registerPage.fillIRCnick(registerPage.irc);
  await registerPage.clickRegisterSubmitBtn();
  await expect(page).toHaveURL('https://www.redmine.org/login');
});

test('Should register with empty credentials', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.clickRegisterBtn();
  await registerPage.clickRegisterSubmitBtn();
  await expect(page).toHaveURL('https://redmine.org/account/register');
  await expect(registerPage.registerErrorExplanationMessage).toBeVisible();
});

});
