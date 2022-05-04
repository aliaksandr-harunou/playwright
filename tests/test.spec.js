// example.spec.js
const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const LoginPage = require('../pageObjects/loginPage');
const ResultPage = require('../pageObjects/resultPage');
const creds = require('../creds')

test('user is able to log in', async ({ page }) => {  
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  await mainPage.open();
  await mainPage.header.openLoginPage()
  await loginPage.typeEmail(creds.login)
  await loginPage.typePassword(creds.password)
  await loginPage.clickSignIn()
  await page.waitForTimeout(5000)

});

test('search should show results', async ({ page }) => {
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page);
  await mainPage.open();
  await mainPage.header.openCart()
  await mainPage.header.search("Бутсы")
  await page.waitForTimeout(5000)
  await expect(resultPage.category).toContainText('Футбольная экипировка');
});
