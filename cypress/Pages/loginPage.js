class loginpage {
  launchURL() {
    return cy.visit("/" + Cypress.env("PATH"));
  }
  enterUsername(invalidUsername) {
    return cy.get("#P9999_USERNAME").type(invalidUsername);
  }

  enterPassword(invalidPassword) {
    return cy.get('input[name="P9999_PASSWORD"]').type(invalidPassword);
  }

  clickLogin() {
    return cy.get('button[type="button"]').eq(0).click();
  }
}
export default new loginpage();
