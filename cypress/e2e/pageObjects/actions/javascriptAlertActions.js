/// <reference types="cypress" />

const { locators } = require('../elements/javascriptElements');

class javascriptActions {
    ClickAlert() {
        cy.contains('Click for JS Alert')
            .click()
            .should('be.visible');
    }

    AssertAlert() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).eq('I am a JS Alert');
        });
    }

    AssertResult() {
        cy.get(locators.result)
            .contains('You successfully clicked an alert')
            .should('be.visible');
    }

    ClickAlertConfirm() {
        cy.contains('Click for JS Confirm')
            .click()
            .should('be.visible');
    }

    AssertAlertConfirm() {
        cy.on('window:confirm', (alertText) => {
            expect(alertText).eq('I am a JS Confirm');
            return true;
        });
    }

    AssertResultConfirm() {
        cy.get(locators.result)
            .contains('You clicked: Ok')
            .should('be.visible');
    }

    TypeAlertPrompt() {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('Hello Hi!!');
            cy.contains('Click for JS Prompt').click().should('be.visible');
        });
    }

    AssertResultPrompt() {
        cy.get(locators.result)
            .contains('You entered: Hello Hi!!')
            .should('be.visible');
    }

} export default javascriptActions;