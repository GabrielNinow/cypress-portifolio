/// <reference types="cypress" />

import MultipletabsActions from '../pageObjects/actions/multipletabsActions';
const multipletabsActions = new MultipletabsActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/windows');
    })

    it('Navigate to multiple tabs & verify', () => {
        multipletabsActions.ClickButton();
        multipletabsActions.GoToPreviousTab();
        multipletabsActions.AssertTab();
    });
})