import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/Login.page';
import { MainPage } from '../pageobjects/MainPage.page';

test.describe('RedmineTest Login', () => {

test.beforeEach(async ({ page }) => {
  const redminePage = new MainPage(page);
  await redminePage.goto();
});

test('Should user in with valid credentials', async ({ page }) => {
  const redminePage = new LoginPage(page);
  await redminePage.userInBtn.click();
  await redminePage.userInUsername("BenborinV");
  await redminePage.userInPassword("56Hx12090");
  await redminePage.userInSubmitBtn.click();
  await expect(page).toHaveURL('https://www.redmine.org/login');
});

test('Should user in with invalid credentials', async ({ page }) => {
  const redminePage = new LoginPage(page);
  await redminePage.userInBtn.click();
  await redminePage.userInWrongUsername("Valodir");
  await redminePage.userInWrongPasswordWithOneSimbol("!");
  await redminePage.userInSubmitBtn.click();
  await expect(page).toHaveURL('https://redmine.org/login');
  await expect(redminePage.userInErrorMessage).toBeVisible();
});

test('Should recovery of password with empty password', async ({ page }) => {
  const redminePage = new LoginPage(page);
  await redminePage.userInPasswordRecovery();
  await expect(page).toHaveURL('https://www.redmine.org/account/lost_password');
});

});
