const { test, expect } = require('@playwright/test');
const { RedminePageMain } = require('../pageobjects/RedminePageMain');

test.describe('RedmineTest', () => {

test('redmine test of user up with valid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.UserUpRight();
});
  
test('redmine test of user up with invalid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.UserUpError();
});
  
test('redmine test of user in with valid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.UserInRight();
});
  
test('redmine test of user in with invalid credentials', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.UserInError();
});
  
test('redmine test of user in recovery of password', async ({ page }) => {
  const redminePage = new RedminePageMain(page);
  await redminePage.goto()
  await redminePage.UserInPasswordRecovery() 
});

});
