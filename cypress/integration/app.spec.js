describe("React App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have required html tags within the application container", () => {
    cy.get("[data-cy-container=app-container]").within(() => {
      cy.get("img").should("exist");
      cy.get("p").should("exist");
      cy.get("a").should("exist");
    });
  });
});
