/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');

    cy.get('[data-test="filter-items"]').as('filterInput'); // make an alias for the filter input.
    cy.get('[data-test="items"]').as('allItems');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems');
    cy.get('[data-test="items-packed"]').as('packedItems');
  });

  it('should verify that only items that match filter are shown on the page', () => {
    cy.get('@filterInput').type('iPhone');

    cy.get('@allItems').should('contain.text', 'iPhone');
    cy.get('@allItems').should('not.contain.text', 'Hoodie');
  });

  it('should move items from packed-items list to the unpacked-items list', () => {
    cy.get('@packedItems').find('label').first().as('theItem');
    cy.get('@theItem').invoke('text').as('text');
    cy.get('@theItem').click();

    cy.get('@text').then((text) => {
      cy.get('@unpackedItems').should('include.text', text);
    });
  });

  it('should move items from packed-items list to the unpacked-items list (better)', () => {
    cy.get('@packedItems').find('label').first().as('theItem');
    cy.get('@theItem')
      .invoke('text')
      .then((text) => {
        cy.get('@theItem').click();
        // cy.get('@unpackedItems').should('include.text', text);
        cy.get('@unpackedItems').contains(text);
        
      });
  });
});