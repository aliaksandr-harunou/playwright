// example.spec.js
const { test, expect } = require('@playwright/test');
const MainPage = require('../support/pageObjects/mainPage');
const LoginPage = require('../support/pageObjects/loginPage');
const ResultPage = require('../support/pageObjects/resultPage');
const creds = require('../support/credentials/creds')

test('user is able to log in', async ({ page }) => {  
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  await mainPage.open();
  await mainPage.header.openLoginPage()
  await loginPage.typeEmail(creds.login)
  await loginPage.typePassword(creds.password)
  await loginPage.clickSignIn()
});

test('search should show results', async ({ page }) => {
  const mainPage = new MainPage(page);
  const resultPage = new ResultPage(page);
  await mainPage.open();
  await mainPage.header.openCart()
  await mainPage.header.search("Бутсы")
  await expect(resultPage.category).toContainText('Футбольная экипировка');
});
