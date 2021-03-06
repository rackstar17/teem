'use strict';

class MenuPage {
  constructor () {
    this.menuEl = element(by.css('.menu'));

    this.userNickEl = this.menuEl.element(by.css('[data-nick]'));
  }

  currentNick () {
    return this.userNickEl.getAttribute('data-nick');
  }

  isLoggedIn () {
    return this.userNickEl.isPresent();
  }
}

module.exports = MenuPage;
