
/// <reference types="Cypress" />


    it('', () => {
        cy.visit('https://uuusoftware.com/'),
            cy.viewport(1920, 1040)
                cy.contains('Contact us');
    })


    it('', () => {
    cy.visit('https://uuusoftware.com/'),
        cy.viewport(1920, 1040)
            cy.contains('div', 'contact us', {matchCase: false});
    // чтобы игнорировать регистр нужно
})

it.only('', () => {
    cy.visit('https://uuusoftware.com/'),
        cy.viewport(1920, 1040)
    cy.get('footer').contains('About Us');
})

it('', () => {
    cy.visit('https://uuusoftware.com/'),
        cy.viewport(1920, 1040)
    cy.get('footer').contains('About Us');
})






