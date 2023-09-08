/// <reference types="cypress" />

import BrokenImagesActions from '../pageObjects/actions/brokenImagesActions';
const brokenImagesActions = new BrokenImagesActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('broken_images');
    })

    it('check if image is broken', () => {
        brokenImagesActions.AssertBrokenImages();
    })

})