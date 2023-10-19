/// <reference types="cypress" />

const { locators } = require('../elements/dynamicLoadingElements');


class dynamicLoadingActions {
    ClickFirstLoading() {
        cy.get(locators.FirstExample)
            .contains('Example 1')
            .click();
    }

    ValidateFirstPage(){
        cy.get(locators.Header)
            .contains('Example 1: Element on page that is hidden')
            .should('be.visible');
    }

    ValidateLoadingIsShown(){
        cy.get(locators.Finish)
            .invoke('show')
            .should('be.visible');
    }
 
    ClickStart(){
        cy.get(locators.StartButton)
            .click();
    }

    ValidateLoadingIsVisible(){
        cy.get(locators.Loading)
            .contains('Loading', { timeout: 20000 })
            .should('not.be.visible');
    }
    
    ValidateLoadingFinish(){
        cy.get(locators.Finish)
            .contains('Hello World!')
            .should('be.visible');
    }
      
    ClickSecondLoading(){
        cy.get(locators.SecondExample)
            .contains('Example 2')
            .click();
    }

    ValidateSecondPage(){
        cy.get(locators.Header)
        .contains('Example 2: Element rendered after the fact')
        .should('be.visible');
    }

} export default dynamicLoadingActions;