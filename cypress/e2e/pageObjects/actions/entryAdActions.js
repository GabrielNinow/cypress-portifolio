/// <reference types="cypress" />


const { locators } = require('../elements/entryAdElements');

class entryAdActions {
    CloseAd(){
        cy.get(locators.CloseAd)
            .click();
    }

    ValidateCloseAd(){
        cy.get(locators.CloseAd)
            .should('not.be.visible');
    }

} export default entryAdActions;
