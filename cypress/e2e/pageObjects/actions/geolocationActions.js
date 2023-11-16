/// <reference types="cypress" />

const { locators } = require('../elements/geolocationElements');
var mockedLatitude = 0;
var mockedlongitude = 0;

class geolocationActions {
    MockGeolocation(latitude, longitude) {
        cy.window().then(($window) => {
            cy.stub($window.navigator.geolocation, 'getCurrentPosition').callsFake(
                (callback) => {
                    return callback({ coords: { latitude, longitude } });
                },
            );
        });

        mockedLatitude = latitude;
        mockedlongitude = longitude;
    }

    ClickButton() {
        cy.get(locators.geolocationButton).click().should('be.visible');
    }

    AssertLatitude() {
        cy.contains(mockedLatitude).should('be.visible');

    }

    AssertLongitude() {
        cy.contains(mockedlongitude).should('be.visible');

    }
} export default geolocationActions;