/// <reference types="cypress" />

const { locators } = require('../elements/horizontalSliderElements');

class horizontalSliderActions {
    SlideInput() {
        cy.get(locators.inputSlider)
            .invoke('val', '2.5')
            .trigger('change');
    }

    MoveInputKey() {
        cy.get(locators.inputSlider)
            .focus()
            .type(Cypress._.repeat('{rightarrow}-{enter}', 5))
            .trigger('change');
    }

    AssertInput() {
        cy.get(locators.spanValue)
            .should('have.text', '2.5');
    }

} export default horizontalSliderActions;