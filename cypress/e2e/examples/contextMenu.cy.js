/// <reference types="cypress" />

import ContextMenuActions from '../pageObjects/actions/contextMenuActions';
const contextMenuActions = new ContextMenuActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('context_menu');
    })

    it('assert context menu', () => {
        contextMenuActions.ClickContextMenu();
        contextMenuActions.AssertAlert();
    })

})