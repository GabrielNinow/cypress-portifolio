/// <reference types="cypress" />

import InfiniteScrollActions from '../pageObjects/actions/infiniteScrollActions';
const infiniteScrollActions = new InfiniteScrollActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('');
    })

    const givenArraySize = 8;
    const indexArray = [...Array(givenArraySize).keys()];
    it('Infinite scroll', () => {
        infiniteScrollActions.InterceptRequest();
        infiniteScrollActions.VisitTestPage();
        infiniteScrollActions.AssertInfiniteScroll(indexArray);
        infiniteScrollActions.AssertArrayIndex(givenArraySize);
    });
})