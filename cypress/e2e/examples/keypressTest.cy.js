/// <reference types="cypress" />

import KeyPressActions from '../pageObjects/actions/keyPressActions';
const keyPressActions = new KeyPressActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/key_presses');
    })

    it('Verify key presses', () => {
        keyPressActions.TypeField();
        keyPressActions.TypeKeypress();
        keyPressActions.AssertResult();
    });
})