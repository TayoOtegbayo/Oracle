import loginPage from "../Pages/loginPage";

describe("template spec", () => {
  const invalidUsername = "wrongUser@email.com";
  const invalidPassword = "wrongPassword";

  it("Verify that a user cannot login with wrong credentials", () => {
    loginPage.launchURL();
    loginPage.enterUsername(invalidUsername);
    loginPage.enterPassword(invalidPassword);
    loginPage.clickLogin();
  });

  it("Verify that a valid user can login", () => {
    cy.loginViaUi();
  });
});
