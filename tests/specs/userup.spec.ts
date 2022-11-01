import { test, expect } from '@playwright/test';
import { UserupPage } from '../pageobjects/Userup.page';
import { MainPage } from '../pageobjects/MainPage.page';


test.describe('RedmineTest Userup', () => {

test.beforeEach(async ({ page }) => {
  const redminePage = new MainPage(page);
  await redminePage.goto();
});

test('Should user up with valid credentials', async ({ page }) => {
  const redminePage = new UserupPage(page);
  await redminePage.goto()
  await redminePage.userUpBtn.click();
  await redminePage.userUpLogin("Erfendyal70");
  await redminePage.userUpPassword("57Hx12077B");
  await redminePage.userUpPasswordConfirmation("57Hx12077B");
  await redminePage.userUpName("WargotDon");
  await redminePage.userUpSurname("Straberrry7");
  await redminePage.userUpEmail("poromnikFA@email.com");
  await redminePage.userUpIRCnick("boy15");
  await redminePage.userUpSubmitBtn.click();
  //await expect(page).toHaveURL('https://www.redmine.org/login');
  //await expect(redminePage.userUpSuccessfulRegistrationMessage).toBeVisible();

});

test('Should user up with empty credentials', async ({ page }) => {
  const redminePage = new UserupPage(page);
  await redminePage.goto()
  await redminePage.userUpBtn.click();
  await redminePage.userUpSubmitBtn.click();
  await expect(page).toHaveURL('https://redmine.org/account/register');
  await expect(redminePage.userUpErrorExplanationMessage).toBeVisible();
});

});
