/// <reference types="cypress" />

import AddAndRemoveActions from '../pageObjects/actions/addAndRemoveActions';
const addAndRemoveActions = new AddAndRemoveActions;
const iteration = 10;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('add_remove_elements/');
    })

    it('Add and remove buttons', () => {
        addAndRemoveActions.clickAddButton(iteration);
        addAndRemoveActions.clickRemoveButton(iteration);
        addAndRemoveActions.logClickedTimes(iteration);
        addAndRemoveActions.AssertIfButtonExist();
    })

})