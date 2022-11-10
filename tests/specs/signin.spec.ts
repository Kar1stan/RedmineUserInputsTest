import { test, expect } from '@playwright/test';
import { SignInPage } from '../pageobjects/SignIn.page';
import { MainPage } from '../pageobjects/MainPage.page';
import 'dotenv/config'

test.describe('RedmineTest Sign In', () => {

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
});

test('Should sign in  with valid credentials', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.clickSignInBtn()
  await signInPage.signInUsername(process.env.USERNAME!);
  await signInPage.signInPassword(process.env.PASSWORD!);
  await signInPage.clickSignInSubmitBtn();
  await expect(page).toHaveURL('https://www.redmine.org/login');
});

test('Should sign in with invalid credentials', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.clickSignInBtn();
  await signInPage.signInUsername(process.env.WRONG_USERNAME!);
  await signInPage.signInPassword(process.env.WRONG_PASSWORD_WITH_ONE_SYMBOL!);
  await signInPage.clickSignInSubmitBtn();
  await expect(page).toHaveURL('https://redmine.org/login');
  await expect(signInPage.signInErrorMessage).toBeVisible();
});

test('Should recovery of password with empty password', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.signInPasswordRecovery();
  await expect(page).toHaveURL('https://www.redmine.org/account/lost_password');
});

});
