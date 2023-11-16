/// <reference types="cypress" />

import InputActions from '../pageObjects/actions/inputActions';
const inputActions = new InputActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('inputs');
    })

    it('Validate input field', () => {
        inputActions.TypeTextValue();
        inputActions.Warning();
        inputActions.TypeNumericValue();
    });
})