/// <reference types="cypress" />


const { locators } = require('../elements/dynamicContentElements');
let tempImgSrc = [];
let tempTrimSrc = [];

class dropdownActions {
    StoreImageSrc() {
        cy.get(locators.Img)
            .then(($img) => {
                tempImgSrc = Array.from($img, (img) => img.src);
            });
    }

    StoreLabelSrc() {
        cy.get(locators.Label)
            .then(($content) => {
                tempTrimSrc = Array.from($content, (element) => element.innerText.trim());
            });
    }

    ReloadPage(){
        cy.reload();
    }

    CompareImgSrc(){
        cy.get(locators.Img)
            .then(($imgSecondVisit) => {
                const ImgSrcSecVisit = Array.from($imgSecondVisit, (img) => img.src);
                expect(ImgSrcSecVisit).not.to.deep.eq(tempImgSrc);
          });
    }

    CompareLabelSrc(){
        cy.get(locators.Label)
            .then(($contentSecondVisit) => {
                const TrimContentSecondVisit = Array.from($contentSecondVisit,(element) => element.innerText.trim());
            expect(TrimContentSecondVisit).not.to.deep.eq(tempTrimSrc);
          });
    }

} export default dropdownActions;
