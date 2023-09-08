/// <reference types="cypress" />

import CheckboxesActions from '../pageObjects/actions/checkboxesActions';
const checkboxesActions = new CheckboxesActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('checkboxes');
    })

    it('assert checkboxes click', () => {
        checkboxesActions.AssertCheckbox1();
        checkboxesActions.AssertCheckbox2();
    })

})