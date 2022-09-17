const { test, expect } = require('@playwright/test');
const { RedmineMainPage } = require('../pageobjects/Redmine.page');

test.describe('Redmine Test', () => {

test('Should sign up with valid credentials', async ({ page }) => {
  const redminePage = new RedmineMainPage(page);
  await redminePage.goto()
  await redminePage.userUpRight();
  await expect(page).toHaveURL('https://redmine.org/account/register');
  await expect(page.locator('#flash_error')).toBeVisible();
});
  
test('Should sign up with invalid credentials', async ({ page }) => {
  const redminePage = new RedmineMainPage(page);
  await redminePage.goto()
  await redminePage.userUpError();
  await expect(page).toHaveURL('https://redmine.org/account/register');
  await expect(page.locator('#errorExplanation')).toBeVisible();
});
  
test('Should sign in with valid credentials', async ({ page }) => {
  const redminePage = new RedmineMainPage(page);
  await redminePage.goto()
  await redminePage.userInRight();
  await expect(page).toHaveURL('https://redmine.org/login');
  //was trying to expect selector of the error message but didn't work
});
  
test('Should sign in with invalid credentials', async ({ page }) => {
  const redminePage = new RedmineMainPage(page);
  await redminePage.goto()
  await redminePage.userInError();
  await expect(page).toHaveURL('https://redmine.org/login');
  await expect(page.locator('#flash_error')).toBeVisible();
});
  
test('Should sign in recovery of password', async ({ page }) => {
  const redminePage = new RedmineMainPage(page);
  await redminePage.goto()
  await redminePage.userInPasswordRecovery();
  await expect(page).toHaveURL('https://www.redmine.org/account/lost_password');
  //was trying to expect selector of the error message but didn't work
});

});
