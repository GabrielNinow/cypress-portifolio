/// <reference types="cypress" />

const { locators } = require('../elements/brokenImagesElements');


class BrokenImagesActions {
    AssertBrokenImages() {
        cy.log(locators.imagesContainer)
        cy.get(`${locators.imagesContainer} > img`).each(($img) => {
            cy.wrap($img).invoke('attr', 'src').then(($src) => {
                if ($src.includes('asdf.jpg') || $src.includes('hjkl.jpg')) {
                    chai.expect($img[0].naturalWidth).to.be.equals(0);
                    chai.expect($img[0].naturalHeight).to.be.equals(0);
                }
                else {
                    chai.expect($img[0].naturalWidth).to.be.greaterThan(0);
                    chai.expect($img[0].naturalHeight).to.be.greaterThan(0);
                }
            })
        })
    }

} export default BrokenImagesActions;