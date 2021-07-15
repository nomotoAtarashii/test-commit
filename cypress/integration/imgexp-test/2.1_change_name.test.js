/// <reference types="cypress" />

describe('Change Name Test', () => {

    beforeEach(() => {
        // VISIT & LOG IN
        cy.visit('http://imgexp.herokuapp.com', { setTimeout: 6000 })
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('test@gmail.com')
        cy.get('#signInPassword').type('AbCd!232')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({ force: true })
        cy.wait(1500)
    })

    it('change_name_01 - Limit 50 Characters', () => {
        // CHANGE NAME
        // click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click edit profile
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(1) > a > span.p-menuitem-text.ng-star-inserted').click()
        // change name
        cy.get('#username').clear({ force: true }).type('thinhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', { force: true })
        // click save
        cy.get('#saveBtn').click({ force: true })

        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Username is at most 50 characters').should('exist', { setTimeout: 600000 })

    })

    it('change_name_2 - Cannot save without input', () => {
        // click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()

        // Not input username and click save
        cy.get('#saveBtn').click({ force: true })
        cy.wait(1500)

        // CHECK RESULTS
        // Check that error message is NOT being output
        cy.contains('Username is required').should('exist', { setTimeout: 600000 })
    })

    it('change_name_03 - Support UTF-8 Language', () => {
        // click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click()
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()

        // change name
        cy.get('#username').type('Nguyễn Văn A', { force: true })
        // click save
        cy.get('#saveBtn').click({ force: true })
        cy.wait(1500)

        // check result
        cy.get('#username').invoke('attr', 'placeholder').should('eq', 'Nguyễn Văn A')
    })

    afterEach(() => {
        // LOG OUT
        cy.get('body > app-root > app-user-profile > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button').click({ force: true })
        cy.get('body > app-root > app-user-profile > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(3) > a').click({ force: true })
    })

})