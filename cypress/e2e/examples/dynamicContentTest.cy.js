/// <reference types="cypress" />

import DynamicContentActions from '../pageObjects/actions/dynamicContentActions';
const dynamicContentActions = new DynamicContentActions;

context('Dynamic Contents', () => {
    beforeEach(() => {
        cy.visit('dynamic_content');
    })

    it('Assert dynamic contents', () => {
        dynamicContentActions.StoreImageSrc();
        dynamicContentActions.StoreLabelSrc();
        dynamicContentActions.ReloadPage();
        dynamicContentActions.CompareImgSrc();
        dynamicContentActions.CompareLabelSrc();
    })

})