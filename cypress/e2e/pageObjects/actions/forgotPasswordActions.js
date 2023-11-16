/// <reference types="cypress" />

const { locators } = require('../elements/forgotPasswordElements');

class forgotPasswordActions {
    TypeEmail() {
        cy.get(locators.emailField)
            .type('{selectall}{backspace}test@mail.com');
    }

    SubmitForm() {
        cy.get(locators.formSubmit).click();
    }

    AssertForm() {
        cy.contains(locators.emailContent, `Your e-mail's been sent!`, {
            timeout: 10000,
        }).should('be.visible');
    }

    Warning() {
        cy.log('Expect to fail as currently application throws 500 error');
    }
} export default forgotPasswordActions;