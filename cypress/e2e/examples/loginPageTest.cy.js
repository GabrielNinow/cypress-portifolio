/// <reference types="cypress" />

import LoginPageActions from '../pageObjects/actions/loginPageActions';
const loginPageActions = new LoginPageActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/login');
    })


    it('Validate data driven login page with two users', () => {
        loginPageActions.ValidateUsers();
    });
})