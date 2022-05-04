const Header = require('./header')
class MainPage {

  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.accountButton = page.locator('button', {hasText: 'Аккаунт'});
    this.signInButton = page.locator('button', {hasText: 'Войти'});
    this.cartButton = page.locator('a.headerCartBox');
  }

  async open() {
    await this.page.goto('https://www.21vek.by/');
  }
}

module.exports = MainPage