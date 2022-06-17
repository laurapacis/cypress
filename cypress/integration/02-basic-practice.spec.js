/// <reference types="cypress" />

describe('Basic Practice', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });

  describe('Adding a new item', () => {
    it('should put a new item on the page after clicking on "Add Item"', () => {
      const item = 'good attitude'; // declare it because your brain wont work at the end of the day
      
      cy.get('[data-test="new-item-input"]').type(item); // write new item
      cy.get('[data-test="add-item"]').click(); // add new item

      cy.contains(item); // check if new item is added
    });

    it('should put a new item in the "Unpacked Items" list', () => {
      const item = 'good attitude';

      cy.get('[data-test="new-item-input"]').type(item);
      cy.get('form').submit(); // instead of .click() which also actually submits the form
      cy.get('[data-test="items-unpacked"]').contains(item);
    });

    it('should put a new item as the last item in the "Unpacked Items" list', () => {
      const item = 'good attitude'; 

      cy.get('[data-test="new-item-input"]').type(item);
      cy.get('form').submit();

      cy.get('[data-test="items-unpacked"] li').last().contains(item);
    });
  });

  describe('Filtering items', () => {
    it('should show items that match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('Tooth');

      cy.get('[data-test="items-unpacked"]').contains('Tooth Brush');
      cy.get('[data-test="items-unpacked"]').contains('Tooth Paste');
    });

    it.only('should hide items that do not match whatever is in the filter field', () => {
      cy.get('[data-test="filter-items"]').type('Tooth');

      cy.contains('booo').should('not.exist');
    });
  });

  describe('Removing items', () => {
    describe('Remove all', () => {
      it('should remove all of the items', () => {});
    });

    describe('Remove individual items', () => {
      it('should have a remove button on an item', () => {});

      it('should remove an item from the page', () => {});
    });
  });

  describe('Mark all as unpacked', () => {
    it('should empty out the "Packed" list', () => {});

    it('should empty have all of the items in the "Unpacked" list', () => {});
  });

  describe('Mark individual item as packed', () => {
    it('should move an individual item from "Unpacked" to "Packed"', () => {});
  });
});
