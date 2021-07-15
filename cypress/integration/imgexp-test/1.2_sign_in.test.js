/// <reference types="cypress" />

describe('Sign In Test', () => {

    it('sign_in_01 - Verify that input  tags are required', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Click SIGN IN of user sign in
        cy.get('#sign-in-btn').click();
        
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('is required').should('exist', {setTimeout: 60000000})
        // Check that the current page is NOT the userSignIn page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')  

    })

    it('sign_in_02 - Verify that your email must have domain name after "@"', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('thinh@')
        cy.get('#signInPassword').type('thinh123456789')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true}, {setTimeout: 10000})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Invalid email or password').should('exist', {setTimeout: 10000})
        // Check that the current page is NOT the userSignIn page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')  

    })

    it('sign_in_03 - Verify that the site do not accept incorrect account input', () =>{
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('thinh123@gmail.com')
        cy.get('#signInPassword').type('12')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Invalid email or password').should('exist', {setTimeout: 60000000})
        // Check that the current page is NOT the userSignIn page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')  
    })

    it('sign_in_04 - Password must be distinguished from upper and lower case', () =>{
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('test@gmail.com')
        cy.get('#signInPassword').type('abcd!232')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Invalid email or password').should('exist', {setTimeout: 60000000})
        // Check that the current page is NOT the userSignIn page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')  
    })

})