import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/Login.page';

test.describe('RedmineTest Login', () => {

test('Should user in with valid credentials', async ({ page }) => {
  const redminePage = new LoginPage(page);
  await redminePage.goto()
  await redminePage.userInBtn.click();
  await redminePage.userInUsername("BenborinV");
  await redminePage.userInPassword("56Hx12090");
  await redminePage.userInSubmitBtn.click();
  await expect(page).toHaveURL('https://www.redmine.org/login');
});

test('Should user in with invalid credentials', async ({ page }) => {
  const redminePage = new LoginPage(page);
  await redminePage.goto();
  await redminePage.userInBtn.click();
  await redminePage.userInWrongUsername("Valodir");
  await redminePage.userInWrongPassword("!");
  await redminePage.userInSubmitBtn.click();
  await expect(page).toHaveURL('https://redmine.org/login');
  await expect(redminePage.userInErrorMessage).toBeVisible();
});

test('Should recovery of password with empty password', async ({ page }) => {
  const redminePage = new LoginPage(page);
  await redminePage.goto()
  await redminePage.userInPasswordRecovery();
  await expect(page).toHaveURL('https://www.redmine.org/account/lost_password');
});

});
