/// <reference types="cypress" />

const { locators } = require('../elements/addAndRemoveElements');


class addAndRemoveActions {
    clickAddButton(iteration) {
        for (var i = 0; i < iteration; i++) {
            cy.get(locators.addElementButton)
                .click();
        }
    }

    clickRemoveButton(iteration) {
        for (var i = 0; i < iteration; i++) {
            cy.get(locators.removeElementButton)
                .click();
        }
    }

    logClickedTimes(iteration) {
        cy.log(`Clicked ${iteration} times`);
    }

    AssertIfButtonExist() {
        cy.get(locators.buttonList)
            .children()
            .should('not.exist');
    }

} export default addAndRemoveActions;