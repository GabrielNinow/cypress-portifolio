/// <reference types="cypress" />

import EntryAdActions from '../pageObjects/actions/entryAdActions';
const entryAdActions = new EntryAdActions;

context('Entry ad', () => {
    beforeEach(() => {
        cy.visit('entry_ad');
    })

    it('Close ad window', () => {
        entryAdActions.CloseAd();
        entryAdActions.ValidateCloseAd();
    })

})