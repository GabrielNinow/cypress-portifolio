/// <reference types="cypress" />

import NestedFrameActions from '../pageObjects/actions/nestedFrameActions';
const nestedFrameActions = new NestedFrameActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/nested_frames');
    })

    it(`Validate nested frames in the page with Jquery API contents() way`, () => {
        nestedFrameActions.GetWindowFrames();
        nestedFrameActions.AssertFrames();
    });
})