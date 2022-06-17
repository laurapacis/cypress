/// <reference types="cypress" />

// from Cypress docs – example of a failing test:
// describe('My First Test', () => { // Set up the application state
//   it('Does not do much!', () => { // Take an action
//     expect(true).to.equal(true) // Make an assertion about the resulting application state
//   })
// })

describe('Create a New Item', () => {
    beforeEach(() => { // beforeEach runs before EACH test (oc xD)
        cy.visit('/jetsetter') // tells where to look
    })

    it('should have a form', () => {
        cy.get('form').should('exist');
    })

    it('should have the words "Add Item"', () => {
        cy.contains('Add Item') // looks for this exact text throughout the page
    })
});

