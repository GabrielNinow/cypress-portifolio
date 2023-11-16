/// <reference types="cypress" />

import GeolocationActions from '../pageObjects/actions/geolocationActions';
const geolocationActions = new GeolocationActions;

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/geolocation');
    })

    const latitude = 19.075984;
    const longitude = 72.877656;

    it('Validate GeoLocation', () => {
        geolocationActions.MockGeolocation(latitude, longitude);
        geolocationActions.ClickButton();
        geolocationActions.AssertLatitude();
        geolocationActions.AssertLongitude();
    });


})