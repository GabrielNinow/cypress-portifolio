/// <reference types="cypress" />

const { locators } = require('../elements/multipletabsElements');

class multipleTabsAction {
    ClickButton() {
        cy.get(locators.button)
            .invoke('removeAttr', 'target')
            .click()
            .url()
            .should('include', '/windows/new')
            .get('h3')
            .should('have.text', 'New Window');
    }

    GoToPreviousTab() {
        cy.go('back');
    }

    AssertTab() {
        cy.get(locators.button)
            .should('be.visible');
    }
} export default multipleTabsAction;