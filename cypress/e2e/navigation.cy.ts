describe("Test route navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should navigate to the home page", () => {
    cy.visit("/");
    cy.location("pathname").should("eq", "/");
    cy.get("h1").contains("Glambeleza");
  });

  it("should navigate to the post page", () => {
    cy.visit("/");
    cy.get("img").first().click();
    cy.location("pathname").should("include", "/post/");
  });

  it("Should navigate to the contact page", () => {
    cy.visit("/");
    cy.get("a").contains("Contato").click();
    cy.location("pathname").should("eq", "/contact");
  });
});
