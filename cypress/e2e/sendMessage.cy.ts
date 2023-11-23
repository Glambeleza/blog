describe("Test send message", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact");
  });

  it("Should show error message", () => {
    cy.get("button[type=submit]").click();
    cy.contains("Por favor, preencha todos os campos.");
  });

  it("Should send a message", () => {
    cy.get("input[name=name]").type("Test");
    cy.get("input[name=email]").type("teste@teste.com");
    cy.get("textarea[name=message]").type("Test message");
    cy.get("button[type=submit]").click();
    cy.contains(
      "Sua mensagem foi enviada com sucesso. Retornarei o mais breve possível."
    );
  });
});
