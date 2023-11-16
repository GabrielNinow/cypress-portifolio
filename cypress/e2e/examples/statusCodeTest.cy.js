/// <reference types="cypress" />

import StatusCodeActions from '../pageObjects/actions/statusCodeActions';
const statusCodeActions = new StatusCodeActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/status_codes');
    })

    it('Validate all status codes', () => {
        statusCodeActions.AssertStatusCodes();
    });

})