/// <reference types="cypress" />

describe('Change Password Test', () => {
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

    it('change_pass_01 - Check old password', () => {
        // Click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click({ setTimeout: 60000 })
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click change password
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click({ force: true })
        // Change password
        // Old password should be AbCd!232
        cy.get('#password').type('12345678', { force: true })
        cy.get('#newpassword').type('abcd1234', { force: true })
        cy.get('#renewpassword').type('abcd1234', { force: true })
        // Click Save
        cy.get('#saveBtn').click({ force: true })
        cy.wait(1500)

        // CHECK RESULTS
        // Check that error message is being output
        cy.contains('Password is incorrect').should('exist', { setTimeout: 600000 })
    })

    it('change_pass_02 - Cannot save without input', () => {
        // Click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click({ setTimeout: 60000 })
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click change password
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click({ force: true })
        // No input
        // Click Save
        cy.wait(1500)
        cy.get('#saveBtn').click({ force: true })

        // CHECK RESULTS
        // Check that error message is being output
        cy.contains('is required').should('exist', { setTimeout: 600000 })

    })

    it('change_pass_03 - New Password and Confirm New Password should be the same', () => {
        // Click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click({ setTimeout: 60000 })
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click change password
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click({ force: true })
        // Change password
        cy.get('#password').type('AbCd!232', { force: true })
        cy.get('#newpassword').type('1234abcd', { force: true })
        cy.get('#renewpassword').type('abcd1234', { force: true })
        // Click Save
        cy.get('#saveBtn').click({ force: true })

        // CHECK RESULTS
        // Check that error message is being output
        cy.contains('New repassword is not match with new password').should('exist', { setTimeout: 600000 })
    })

    it('change_pass_04 - New Password and Confirm New Password is 50 characters at most', () => {
        // Click dropdown arrow
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click({ setTimeout: 60000 })
        // Click settings
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(1) > a').click()
        // Click change password
        cy.get('body > app-root > app-user-profile > div > app-settings > p-tabmenu > div > ul > li:nth-child(2) > a > span.p-menuitem-text.ng-star-inserted').click({ force: true })
        // Change password
        cy.get('#password').type('AbCd!232', { force: true })
        cy.get('#newpassword').type('admin1111111111111111111111111111111111111111111111111111111', { force: true })
        cy.get('#renewpassword').type('admin1111111111111111111111111111111111111111111111111111111', { force: true })
        // Click Save
        cy.get('#saveBtn').click({ force: true })

        // CHECK RESULTS
        // Check that error message is being output
        cy.contains('New password is at most 50 characters').should('exist', { setTimeout: 600000 })
    })

    afterEach(() => {
        // LOG OUT
        cy.get('body > app-root > app-change-password > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click({ force: true })
        cy.get('body > app-root > app-change-password > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(3) > a').click({ force: true })
    })

})