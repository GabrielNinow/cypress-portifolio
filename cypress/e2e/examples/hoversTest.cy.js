/// <reference types="cypress" />

import HoverActions from '../pageObjects/actions/hoverActions';
const hoverActions = new HoverActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/hovers');
    })

    it('Validate hovers', () => {
        hoverActions.ShowHover();
        hoverActions.AssertHover();
        hoverActions.AssertHoverHref();

    });
})