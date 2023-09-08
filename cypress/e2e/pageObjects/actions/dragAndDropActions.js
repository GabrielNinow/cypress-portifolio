/// <reference types="cypress" />

const { locators } = require('../elements/dragAndDropElements');
const dataTransfer = new DataTransfer();

class dragAndDropActions {
    DragAndDropBox() {
        cy.get(locators.boxA)
            .trigger('dragstart', { dataTransfer });

        cy.get(locators.boxB)
            .trigger('drop', { dataTransfer });
    }

    AssertDragAndDrop() {
        cy.get(`${locators.boxA} > header`)
            .should('have.text', 'B');

        cy.get(`${locators.boxB} > header`)
            .should('have.text', 'A');
    }

} export default dragAndDropActions;