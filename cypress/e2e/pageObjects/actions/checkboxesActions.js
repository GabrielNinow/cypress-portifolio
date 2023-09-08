/// <reference types="cypress" />

const { locators } = require('../elements/checkboxesElements');


class checkboxesActions {
    AssertCheckbox1() {
        cy.get(`${locators.checkboxContainer} > input:first-of-type`)
            .should('not.be.checked')
            .check()
            .should('be.checked');
    }

    AssertCheckbox2() {
        cy.get(`${locators.checkboxContainer} > input:nth-of-type(2)`)
            .should('be.checked')
            .uncheck()
            .should('not.be.checked');
    }


} export default checkboxesActions;