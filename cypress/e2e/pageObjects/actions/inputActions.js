/// <reference types="cypress" />

const { locators } = require('../elements/inputElements');

class inputActions {
    TypeTextValue() {
        cy.get(locators.input)
            .type('Hello!')
            .should('not.have.value', 'Hello!');
    }

    Warning() {
        cy.log('input should not type text values')
    }

    TypeNumericValue() {
        cy.get(locators.input)
            .type(123)
            .should('have.value', 123);
    }
} export default inputActions;