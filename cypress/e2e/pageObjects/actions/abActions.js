/// <reference types="cypress" />

const { locators } = require('../elements/abElements');


class addAndRemoveActions {
    AssertMessage() {
        cy.get(locators.warningLabel)
            .should('contain', 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    }

    VisitOptimizedUrl() {
        cy.visit('/abtest?optimizely_opt_out=true');
    }

    AssertAfterMessage() {
        cy.get(locators.warningLabel)
            .should('contain', 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn from different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
    }


} export default addAndRemoveActions;