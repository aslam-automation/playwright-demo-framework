export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async gotoLoginPage(url = 'https://example.com') {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.page.locator('input[name="username"]').fill(username);
  }

  async enterPassword(password) {
    await this.page.locator('input[name="password"]').fill(password);
  }

  async clickLogin() {
    await this.page.locator('button:has-text("Login")').click();
  }
}
