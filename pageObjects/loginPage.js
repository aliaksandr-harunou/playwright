const { expect } = require('@playwright/test');

class LoginPage {

  constructor(page) {
    this.page = page;
    this.emailInput = page.locator("#login-email");
    this.passwordInput = page.locator("#login-password");
    this.signInButton = page.locator('[type="Submit"]', {hasText: 'Войти'});
    this.registerButton = page.locator('button', {hasText: 'Регистрация'});
    
  }

  async typeEmail(email) {
    await this.emailInput.fill(email);
  }

  async typePassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }
}

module.exports = LoginPage