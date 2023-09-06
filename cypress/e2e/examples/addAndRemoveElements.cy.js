/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('add_remove_elements/')
    })

    it('test', () => {
        const addElement = 'div.example > button';
        const elementList = 'div#elements';
        const removeElement = `${elementList} :first-child`
        const iteration = 10;

        for (var i = 0; i < iteration; i++) {
            cy.get(addElement)
                .click()
        }

        for (var i = 0; i < iteration; i++) {
            cy.get(removeElement)
                .click()
        }

        cy.log(`Clicked ${iteration} times`)

        cy.get(elementList).children().should('not.exist')
    })
})