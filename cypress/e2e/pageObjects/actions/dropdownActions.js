/// <reference types="cypress" />

const { locators } = require('../elements/dropdownElements');
var selectedOption = '';

class dropdownActions {
    SelectOption(option) {
        selectedOption = option;
        cy.get(locators.optionSelect)
            .select(option);
    }

    AssertSelectedValue() {
        cy.get(locators.optionSelect)
            .contains(selectedOption)
            .should('have.attr', 'selected')
    }

} export default dropdownActions;