/// <reference types="cypress" />

const path = require('path');
const downloadsFolder = Cypress.config('downloadsFolder');

class jqueryMenuActions {
    AddDocTrigger() {
        cy.window()
            .document()
            .then((doc) => {
                doc.addEventListener('click', () => {
                    setTimeout(() => {
                        doc.location.reload();
                    }, 3000);
                });
            });
    }

    MouseOverOption() {
        cy.contains('Enabled')
            .trigger('mouseover');
    }

    ClickToDownloadFile() {
        cy.contains('Downloads')
            .trigger('mouseover')
            .next('ul.ui-menu')
            .then(($thirdSubMenu) => {
                cy.wrap($thirdSubMenu).invoke('show');
                cy.wrap($thirdSubMenu).contains('PDF').click();
            });
    }

    AssertDownloadedFile() {
        cy.readFile(path.join(downloadsFolder, 'menu.pdf'))
            .should('exist');
    }

} export default jqueryMenuActions;