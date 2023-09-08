/// <reference types="cypress" />

const { locators } = require('../elements/contextMenuElements');


class contextMenuActions {
    ClickContextMenu() {
        cy.get(locators.contextMenu).rightclick();
    }

    AssertAlert() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).eq('You selected a context menu');
        });
    }

} export default contextMenuActions;