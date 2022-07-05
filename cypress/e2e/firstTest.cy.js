
/// <reference types="Cypress" />


// it('By id', () => {
//     cy.visit("https://uuusoftware.com/contact-us")
//     cy.get('#email')
// });

// it('By Class', () => {
//     cy.visit("https://uuusoftware.com/contact-us")
//     cy.get('.form-group')
// })

// it.only('By Tag', () => {
//     cy.visit("https://uuusoftware.com/")
//     cy.get('nav')
// })

// it('By Tag value', () => {
//     cy.visit("https://uuusoftware.com/contact-us")
//     cy.get('[name="email"]')
// })

// it('By Tag value', () => {
//     cy.visit("https://uuusoftware.com/contact-us")
//     cy.get('[type="submit"]')
// });

// it('By Diffent Types', () => {
//     cy.visit("https://uuusoftware.com/contact-us")
//     cy.get('button[type="submit"]')
// });

// 30 строка это тоже самое что и 39
// Комбинирующий способ 

// it('By Diffent Types', () => {
//     cy.visit("https://uuusoftware.com/contact-us")
//     cy.get('button[type="submit"][class="submit-btn"]')
// });


// Поиск по уникальному классу или если зашифрован class пример: hfjsdfsdhkj  
// it('By Contains name', () => {
//     cy.visit("https://uuusoftware.com/")
//     cy.get('[class^="three-column-grid"]')
// });


// Формула предназначена для работы с индексами 
// it.only('Using Get with Find and Eq', () => {
//     cy.visit("https://next.privat24.ua/deposit/open")
//     cy.get('tbody').find('td').find('div').find('button').eq(3)
// });

// Comment test1 
it('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit("https://uuusoftware.com/")
    cy.get('header').find('div').find('a').eq(0)
});








