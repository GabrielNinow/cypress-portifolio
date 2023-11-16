/// <reference types="cypress" />

const { locators } = require('../elements/keyPressElements');

class keyPressActions {
    TypeField() {
        cy.get(locators.target)
            .type('Hello');
    }

    TypeKeypress() {
        cy.get(locators.target)
            .type('{backspace}');
    }

    AssertResult() {
        cy.get(locators.result)
            .should('have.text', 'You entered: BACK_SPACE');
    }

} export default keyPressActions;