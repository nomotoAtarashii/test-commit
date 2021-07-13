/// <reference types="cypress" />

describe('example test', () => {
    
    it('this is the test', () => {
        cy.visit('http://imgexp.herokuapp.com', {setTimeout: 6000})
    })

})