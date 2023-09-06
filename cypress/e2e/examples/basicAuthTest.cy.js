/// <reference types="cypress" />

import BasicAuthActions from '../pageObjects/actions/basicAuthActions';
const basicAuthActions = new BasicAuthActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('acess page', () => {
        basicAuthActions.VisitUrl();
        basicAuthActions.AssertCongratulationLabel();
        basicAuthActions.AssertUrl();
    })

})