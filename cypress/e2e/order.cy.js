import orderPage from "../Pages/orderPage";

describe("Ordering of items", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  before(() => {
    cy.loginViaUi();
  });

  it("Verify user can change from order 10 to 20", () => {
    orderPage.clickOrder();
    orderPage.searchOrder();
    orderPage.clickOrderPopup();
    orderPage.enterNewOrderValue();
    orderPage.confirmEditedValue();
  });

  it('Verify that the location is Deli', () => {
     orderPage.clickOrder();
     orderPage.searchOrder();
     orderPage.clickOrderPopup();
     orderPage.enterNewOrderValue();
     orderPage.confirmEditedValue();
  });
});
