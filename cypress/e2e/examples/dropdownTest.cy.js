/// <reference types="cypress" />

import DropdownActions from '../pageObjects/actions/dropdownActions';
const dropdownActions = new DropdownActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('dropdown');
    })

    it('Assert dropdown', () => {
        dropdownActions.SelectOption('Option 1');
        dropdownActions.AssertSelectedValue();
    })

})