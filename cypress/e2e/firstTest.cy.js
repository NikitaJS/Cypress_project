
/// <reference types="Cypress" />

  


it('type', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[name="first_name"]')
    .type("Nikita")

})


it('focus', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    .get('[type="button"]')
    .focus()
})

it('blur', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[name="first_name"]')
    .focus()
    .blur()
})


it('clear first name', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[name="first_name"]')
    .type("Nikita")
    .wait(2000)
    .clear()
})

it('submit send message', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[class="contact-page__form"]')
    .submit()
})

it('click radio less than $50k', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[class="budget"]')
    cy.get('[type="radio"]').first().check()
})

it('click radio less than $50k', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('[class="budget"]')
    cy.get('[type="radio"]').first().check()
})

it('click radio $100k-150k', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('input[value="$100-150k"]')
    .check()
})


it('rightclick ', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    .contains('Right click to edit')
    .rightclick()        
})  

it('rightclick ', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    .contains('Share your request with us')
    .dblclick()        
})  


it('click radio $100k-150k', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('input[value="$100-150k"]')
    .check()
})

it('uncheck', () => {
    cy.visit('https://uuusoftware.com/contact-us')
    cy.get('input[value="$100-150k"]')
    .uncheck()
})

it('select', () => {
    cy.visit('https://www.facebook.com/reg/')
    .get('#month')
    .select('Feb')

    .get('#day')
    .select('1')

    .get('#year')
    .select('1991')
})

it('celect', () => {
    cy.visit('https://uuusoftware.com/')
    cy.get('button[class="intro__btn button"]').click()
    cy.get('.contactus__select')
    .select(['500$'])

})
// was implemented using the following block 99 - 107/108
// cy.get('.action-select-multiple')
//   .select(['apples', 'oranges', 'bananas'])

it('celect', () => {
    cy.visit('https://uuusoftware.com/')
    cy.get('button[class="intro__btn button"]').click()
    cy.get('.contactus__select')
    .select(['500$'])

})

it('celect', () => {
    cy.visit('https://uuusoftware.com/')
    cy.get('[class="phone"]')
    .wait(2000)
    .scrollIntoView()
})

it('scrollTo', () => {
    cy.visit('https://uuusoftware.com/')
    .wait(2000)
    cy.scrollTo(0, 8500)
})

it.only('celect', () => {
    cy.visit('https://uuusoftware.com/')
    cy.viewport(1920, 1040)
    cy.contains('Services')
    .wait(4000)
    .trigger('mouseover')
})










