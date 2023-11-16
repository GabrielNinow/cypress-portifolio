/// <reference types="cypress" />

import JqueryMenuActions from '../pageObjects/actions/jqueryMenuActions';
const jqueryMenuActions = new JqueryMenuActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/jqueryui/menu');
    })

    it('Validate JQuery UI menus', () => {
        jqueryMenuActions.AddDocTrigger();
        jqueryMenuActions.MouseOverOption();
        jqueryMenuActions.ClickToDownloadFile();
        jqueryMenuActions.AssertDownloadedFile();
    });
})