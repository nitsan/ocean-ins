/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('should go to home page', () => {
    cy.get('#site-navigation')
      .get('.active')
      .contains('בית');

    cy.get('.title')
      .contains('אושן סוכנות לביטוח - מעטפת ביטוחים מקיפה, אוקיינוס של אפשרויות בשבילך')
  });

  it('should go to about page', () => {
    cy.visit('http://localhost:4200/about');

    cy.get('#site-navigation')
      .get('.active')
      .contains('אודות');

    cy.get('.page-title')
      .contains('אודות')
  });
});
