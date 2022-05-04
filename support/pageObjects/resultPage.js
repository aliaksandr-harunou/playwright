const Header = require('./header')

class ResultPage {

    constructor(page) {
      this.page = page;
      this.header = new Header(page)
      this.category = page.locator('a.j-category__link');
    }  
  }
  
  module.exports = ResultPage