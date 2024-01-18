// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("loginViaUi", (user) => {
  cy.log("**log in**");
  cy.visit("/" + Cypress.env("PATH"));
  cy.get("#P9999_USERNAME").type(Cypress.env("USERNAME"));
  cy.get('input[name="P9999_PASSWORD"]').type(Cypress.env("PASSWORD"));
  cy.get('button[type="button"]').eq(0).click();
  cy.url().should("contain", "home?session");
});
