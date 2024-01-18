class orderPage {
  clickOrder() {
    return cy.get("#C63745781825095460602_HDR").click();
  }
  searchOrder() {
    return cy
      .get('input[id="R63745779882333460582_ig_column_header_search"]')
      .eq(0)
      .type("10")
      .type("{enter}");
  }
  clickOrderPopup() {
    cy.get(".a-IG-controlsLabel").dblclick();
    cy.get("#R63745779882333460582_ig_FD_VALUE").dblclick();
    return this;
  }
  enterNewOrderValue() {
    cy.get("#R63745779882333460582_ig_FD_VALUE").clear().type("20");
    cy.get(".ui-button--hot").click();
    return this;
  }
  confirmEditedValue() {
    return cy
      .get(
        "#R63745779882333460582_ig_grid_vc > .a-GV-bdy > .a-GV-w-scroll > .a-GV-table > tbody > .a-GV-row > .u-tC"
      )
      .eq(0)
      .should("contain", "20");
  }
  confirmLocation() {}
}
export default new orderPage();
