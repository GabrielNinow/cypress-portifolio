/// <reference types="cypress" />

class infiniteScrollActions {
    InterceptRequest() {
        cy.intercept('/infinite_scroll/**').as('paragraph');
    }

    VisitTestPage() {
        cy.visit('/infinite_scroll');
    }
    AssertInfiniteScroll(indexArray) {
        cy.wrap(indexArray).each((index) => {
            cy.log(`Scroll to bottom with ${index + 1} time`);
            cy.log('Wait for the network request').wait('@paragraph');
            cy.window().scrollTo('bottom');
        });
    }

    AssertArrayIndex(givenArraySize) {
        cy.get('.jscroll-added').its('length').should('eq', givenArraySize);
    }

} export default infiniteScrollActions;