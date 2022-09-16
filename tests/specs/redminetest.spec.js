const { test, expect } = require('@playwright/test');
const { RedminePageMain } = require('../pageobjects/Redmine.page');

test.describe('Redmine Test', () => {

test('Should sign up with valid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.userUpRight();
});
  
test('Should sign up with invalid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.userUpError();
});
  
test('Should sign in with valid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.userInRight();
});
  
test('Should sign in with invalid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.userInError();
});
  
test('Should sign in recovery of password', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.userInPasswordRecovery();
  await expect(this.page).toHaveURL('https://redmine.org/account/lost_password');
});

});
