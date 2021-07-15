/// <reference types="cypress" />

describe('Sign Up Verify Test', () => {
    beforeEach(() => {
        // VISIT
        cy.visit('http://imgexp.herokuapp.com', { setTimeout: 6000 })
    })

    it.skip('sign_up_06 - Check valid sign up with verification', () => {
        // Define the popup window contain mail website
        const mailUrl = "https://temp-mail.org/en/"

        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen')
        })

        // Declare code variable
        const code = ''

        // Declare function windowOpen to be trigger
        Cypress.Commands.add('openNewWin', () => {
            window.open()
        })

        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Enter email, password and confirm password
        cy.get('#signUpEmail').type('wedop92891@godpeed.com', { force: true })
        cy.get('#signUpPassword').type('abcd1234', { force: true })
        cy.get('#signUpRepassword').type('abcd1234', { force: true })
        // Click SIGN UP button
        cy.get('#signUpSubmit').click()
        cy.openNewWin()

        // Verification
        // Visit the mail website in new pop up window
        cy.get('@windowopen').should('be.calledWith', mailUrl)
        cy.window().then(win => {
            // url of popup window
            win.location.href = mailUrl
            // click in the mail
            cy.get('#tm-body > main > div.container > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-8 > div.tm-content > div > div.inboxWarpMain > div > div.inbox-dataList > ul > li:nth-child(2) > div:nth-child(3) > div.m-link-view > a > svg').click()
            // get the code
            cy.get('#tm-body > main > div.container > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-8 > div.tm-content > div > div.inboxWarpMain > div > div.inbox-data-content > div.inbox-data-content-intro').invoke('text').then(text => {
                code = text
                code = code.substring((code.length - 1), (code.length - 1))
            })
        })



        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')

    })
})