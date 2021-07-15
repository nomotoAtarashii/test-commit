/// <reference types="cypress" />

describe('Sign Up Test', () =>{
    it('sign_up_01 - Verify that input tags are equired', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com', {setTimeout: 60000000000})
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Click SIGN UP button without input
        cy.get('#signUpSubmit').click()
        
        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')
        // Check that error message is being output
        cy.contains('Email is required').should('exist')
        cy.contains('Password is required').should('exist')
        
    })

    // Verify that your email must have domain name after "@"
    it('sign_up_02 - Verify that your email must have domain name after "@"', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter the fields
        // Email must not have domain name after "@"
        cy.get('#signUpEmail').type('beced28257@')
        cy.get('#signUpPassword').type('1234567')
        cy.get('#signUpRepassword').type('1234567', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})

        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')
        // Check that error message is being output
        cy.contains('Email is invalid').should('exist')
    })

    // Verify that your email does not contain 2 dot(.) or 2 "@"
    it('sign_up_03 - Verify that your email does not contain 2 dot(.) or 2 "@"', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter the fields
        // Email must have two "@"
        cy.get('#signUpEmail').type('beced28257@@ovooovo.com')
        cy.get('#signUpPassword').type('1234567')
        cy.get('#signUpRepassword').type('1234567', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})

        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')
        // Check that error message is being output
        cy.contains('Email is invalid').should('exist')
    })

    // Verify that your password can only contain 50 characters at most
    it('sign_up_04 - Verify that your password can only contain 50 characters at most', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter the fields
        // Password must have more than 50 characters
        cy.get('#signUpEmail').type('beced28257@ovooovo.com')
        cy.get('#signUpPassword').type('thinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinh')
        cy.get('#signUpRepassword').type('thinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinhthinh', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})

        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')
        // Check that error message is being output
        cy.contains('Password is at most 50 characters').should('exist')
    })
    
    // Verify that your password can contain 6 characters at least
    it('sign_up_05 - Verify that your password can contain 6 characters at least', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter the fields
        // Password must have more than 50 characters
        cy.get('#signUpEmail').type('beced28257@ovooovo.com')
        cy.get('#signUpPassword').type('thi')
        cy.get('#signUpRepassword').type('thi', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})

        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')
        // Check that error message is being output
        cy.contains('Password is at least 6 characters').should('exist')
    })

    // Verify that your password can contain only alphanumeric, upper case, lowercase, undercore(_) and dash(-)
    it.skip('sign_up_06 - Check valid sign up with verification', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter the fields
        // Password must ONLY alphanumeric, upper case, lowercase, undercore(_) and dash(-)
        cy.get('#signUpEmail').type('beced28257@ovooovo.com')
        cy.get('#signUpPassword').type('thinh_Thinh-1234')
        cy.get('#signUpRepassword').type('thinh_Thinh-1234', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})

        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Password is invalid').should('not.exist', {setTimeout: 600000})
        // Check that the current page is NOT the userLogin page
        cy.url().should('not.include', '/userLogin')
        cy.url().should('not.eq', 'http://imgexp.herokuapp.com/userLogin')        
    })

    it('sign_up_07 - Verify that your password can contain only alphanumeric, upper case, lowercase, undercore(_) and dash(-)', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
         cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter the fields
        // Password must ONLY alphanumeric, upper case, lowercase, undercore(_) and dash(-)
        cy.get('#signUpEmail').type('thinh@gmail.com')
        cy.get('#signUpPassword').type('buithinh@#$%')
        cy.get('#signUpRepassword').type('buithinh@#$%', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Password cannot contain special character(s)').should('exist', {setTimeout: 600000})
        // Check that the current page is NOT the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin') 

 
    })

    it('sign_up_08 - Verify that your email is already in use', () => {
        //STEPS TO DO 
        //Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com')
        // Click Sign-in button
         cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
         // Enter the fields
        // Verify that your email is already in use
        cy.get('#signUpEmail').type('test@gmail.com')
        cy.get('#signUpPassword').type('thinh123456789')
        cy.get('#signUpRepassword').type('thinh123456789', {force:true})
        // Click SIGN UP button to submit
        cy.get('#signUpSubmit').click({force:true})
        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Existed email').should('not.exist', {setTimeout: 600000})
        // Check that the current page is NOT the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')  
    })

})