/// <reference types="cypress" />

import HorizontalSliderActions from '../pageObjects/actions/horizontalSliderActions';
const horizontalSliderActions = new HorizontalSliderActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('horizontal_slider');
    })

    it('Validate horizontal silder', () => {
        horizontalSliderActions.SlideInput();
        horizontalSliderActions.AssertInput();
    });

    it('Using keyboard keys', () => {
        horizontalSliderActions.MoveInputKey();
        horizontalSliderActions.AssertInput();
    });
})