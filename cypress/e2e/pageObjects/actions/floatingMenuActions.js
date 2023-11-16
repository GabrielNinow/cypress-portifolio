/// <reference types="cypress" />

const { locators } = require('../elements/floatingMenuElements');

class floatingMenuActions {
    GoToFooter() {
        cy.get(locators.pageFooter).scrollIntoView();
    }

    AssertAbout() {
        cy.get(locators.pageFooter).should('be.visible');
    }

    ClickAbout() {
        cy.get(locators.aboutTag).click();
    }

    AssertUrl() {
        cy.hash().should('contains', '#about');
    }

} export default floatingMenuActions;