/// <reference types="cypress" />

import FloatingMenuActions from '../pageObjects/actions/floatingMenuActions';
const floatingMenuActions = new FloatingMenuActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('floating_menu');
    })

    it('Validate floating menu', () => {
        floatingMenuActions.GoToFooter();
        floatingMenuActions.AssertAbout();
        floatingMenuActions.ClickAbout();
        floatingMenuActions.AssertUrl();
    });

})