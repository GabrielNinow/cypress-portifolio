/// <reference types="cypress" />

import ForgotPasswordActions from '../pageObjects/actions/forgotPasswordActions';
const forgotPasswordActions = new ForgotPasswordActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/forgot_password');
    })

    it('Validate forgot password usin UI', () => {
        forgotPasswordActions.TypeEmail();
        forgotPasswordActions.SubmitForm();
        forgotPasswordActions.AssertForm();
        forgotPasswordActions.Warning();
    });

})