/// <reference types="cypress" />

const locators = ['left', 'middle', 'right', 'bottom'];
const actualFramesContent = [];
const expectedFramesContent = ['LEFT', 'MIDDLE', 'RIGHT', 'BOTTOM'];

class nestedFrameActions {
    GetWindowFrames() {
        locators.forEach((locator) => {
            if (locator !== 'bottom') {
                cy.get('frame[src="/frame_top"]').within(($frame) => {
                    cy.wrap(
                        $frame.contents().find(`frame[src="/frame_${locator}"]`),
                    ).within((frame) => {
                        cy.wrap(frame.contents().find('body'))
                            .invoke('text')
                            .then((frameBodyText) => {
                                actualFramesContent.push(frameBodyText.trim());
                            });
                    });
                });
            } else {
                cy.get('frame[src="/frame_bottom"]').within(($frame) => {
                    cy.wrap($frame.contents()).within((frame) => {
                        cy.wrap(frame.contents().find('body'))
                            .invoke('text')
                            .then((frameBodyText) => {
                                actualFramesContent.push(frameBodyText.trim());
                            });
                    });
                });
            }
        });

    }

    AssertFrames() {
        cy.wrap(actualFramesContent).should(
            'have.ordered.members',
            expectedFramesContent,
        );
    }

} export default nestedFrameActions;