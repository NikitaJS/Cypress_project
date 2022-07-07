
/// <reference types="Cypress" />


it('SHOULD', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[name="first_name"]')
        .type(100)
        .should('have.value', 100)
        .and('be.visible')
})

it('EXPECT', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[name="first_name"]')
    .type("Nikita").then( input => {
        expect(input).to.have.value("Nikita")
    })   
    })



it('EXPECT', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[value="less than $50k"]')
})

it('check and click burger', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[class="burger"]').click()
    .trigger('mouseov') 
    })   


    it('check is correct attr in button', () => {
        cy.visit('https://uuusoftware.com/contact-us')
        cy.contains('Send')
        .should('have.attr', 'type')
        })  
//
        it.only('check is correct URL', () => {
            cy.visit('https://uuusoftware.com/')
           cy.get('[href="https://goo.gl/maps/SEWV19wnQsh4DWms5"]')
            cy.url().should('eq', 'https://goo.gl/maps/SEWV19wnQsh4DWms5')
            })  






