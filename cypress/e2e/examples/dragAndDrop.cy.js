/// <reference types="cypress" />

import DragAndDropActions from '../pageObjects/actions/dragAndDropActions';
const dragAndDropActions = new DragAndDropActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('drag_and_drop');
    })

    it('Assert drag and drop', () => {
        dragAndDropActions.DragAndDropBox();
        dragAndDropActions.AssertDragAndDrop();
    })

})