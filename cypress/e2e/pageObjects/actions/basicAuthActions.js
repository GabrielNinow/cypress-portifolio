/// <reference types="cypress" />

const { locators } = require('../elements/basicAuthElements');


class basicAuthActions {
    VisitUrl() {
        cy.visit(locators.visitUrl);
    }

    AssertCongratulationLabel() {
        cy.get(locators.congratulationLabel)
            .should('contain', 'Congratulations! You must have the proper credentials.');
    }

    AssertUrl() {
        cy.url()
            .should('contain', 'https://the-internet.herokuapp.com/basic_auth')
    }

} export default basicAuthActions;