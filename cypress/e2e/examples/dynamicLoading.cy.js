/// <reference types="cypress" />

import DynamiLoadingActions from '../pageObjects/actions/dynamicLoadingActions';
const dynamiLoadingActions = new DynamiLoadingActions;

context('Dynamic Contents', () => {
    beforeEach(() => {
        cy.visit('dynamic_loading');
    })

    it('Assert dynamic contents', () => {
      dynamiLoadingActions.ClickFirstLoading();
      dynamiLoadingActions.ValidateFirstPage();
      dynamiLoadingActions.ValidateLoadingIsShown();
      dynamiLoadingActions.ClickStart();
      dynamiLoadingActions.ValidateLoadingIsVisible();
      dynamiLoadingActions.ValidateLoadingFinish();
    })

    it('Assert dynamic contents', () => {
      dynamiLoadingActions.ClickSecondLoading();
      dynamiLoadingActions.ValidateSecondPage();
      dynamiLoadingActions.ClickStart();
      dynamiLoadingActions.ValidateLoadingIsVisible();
      dynamiLoadingActions.ValidateLoadingFinish();
    })

})