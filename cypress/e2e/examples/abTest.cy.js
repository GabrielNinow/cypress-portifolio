/// <reference types="cypress" />

import AbActions from '../pageObjects/actions/abActions';
const abActions = new AbActions;


context('Actions', () => {
    beforeEach(() => {
        cy.visit('/abtest');
    })

    it('Validate optimized page', () => {
        abActions.AssertMessage();
        abActions.VisitOptimizedUrl();
        abActions.AssertAfterMessage();
    })

})