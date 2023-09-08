/// <reference types="cypress" />

import ContextMenuActions from '../pageObjects/actions/contextMenuActions';
const contextMenuActions = new ContextMenuActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('context_menu');
    })

    it('assert checkboxes click', () => {
        contextMenuActions.ClickContextMenu();
        contextMenuActions.AssertAlert();
    })

})