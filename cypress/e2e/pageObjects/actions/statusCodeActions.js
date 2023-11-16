/// <reference types="cypress" />

const status_codes = [200, 301, 404, 500];

class inputActions {
    AssertStatusCodes() {
        status_codes.forEach((status_code) => {
            cy.request({
                url: `/status_codes/${status_code}`,
                failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.eq(status_code);
                expect(response.body).to.include(`a ${status_code} status code`);
            });
        });
    }
} export default inputActions;