class Header {

  constructor(page) {
    this.page = page;
    this.accountButton = page.locator('button', {hasText: 'Аккаунт'});
    this.signInButton = page.locator('button', {hasText: 'Войти'});
    this.cartButton = page.locator('a.headerCartBox');
    this.searchField = page.locator('#catalogSearch')
  }
 

  async openLoginPage() {
    await this.accountButton.click();
    await this.signInButton.click();
  }

  async openCart() {
    await this.cartButton.click()
  }

  async search(thing) {
    await this.searchField.fill(thing)
    await this.searchField.press('Enter');
  }

}

module.exports = Header