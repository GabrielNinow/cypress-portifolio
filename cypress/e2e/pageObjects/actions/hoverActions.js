/// <reference types="cypress" />

const { locators } = require('../elements/hoverElements');

class hoverActions {
    ShowHover() {
        cy.get(locators.hoverChart)
            .first()
            .invoke('show');
    }

    AssertHover() {
        cy.get(locators.hoverChart)
            .first()
            .contains('h5', 'name: user1')
            .should('be.visible');
    }

    AssertHoverHref() {
        cy.get(`${locators.hoverChart} > a`)
            .first()
            .invoke('attr', 'href')
            .should('contain', '/users/1');
    }

} export default hoverActions;