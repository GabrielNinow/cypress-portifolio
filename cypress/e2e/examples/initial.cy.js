/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('add_remove_elements/')
    })

    it('initial', () => {
        cy.get('div.example > button')
            .click()

        cy.get('div.example > button')
            .click()

        cy.get('div#elements :first-child')
            .click()
    })


})