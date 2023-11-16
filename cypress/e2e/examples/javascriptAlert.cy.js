/// <reference types="cypress" />

import JavascriptAlertActions from '../pageObjects/actions/javascriptAlertActions';
const javascriptAlertActions = new JavascriptAlertActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/javascript_alerts');
    });

    it('Validate alert box', () => {
        javascriptAlertActions.ClickAlert();
        javascriptAlertActions.AssertAlert();
        javascriptAlertActions.AssertResult();
    });

    it('Validate confirm box', () => {
        javascriptAlertActions.ClickAlertConfirm();
        javascriptAlertActions.AssertAlertConfirm();
        javascriptAlertActions.AssertResultConfirm();
    });

    it('Validate prompt box', () => {
        javascriptAlertActions.TypeAlertPrompt();
        javascriptAlertActions.AssertResultPrompt();
    });
})