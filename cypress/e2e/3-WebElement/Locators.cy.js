/// <reference types="cypress" />


describe('locating elements',()=>{

    it('find single elements', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]').should('exist')
    })

    it('find multiple element', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[class="feedback-input"]').should('have.length', 4)
        cy.get('[name="last_name"]').should('have.length.greaterThan', 0)
    })

    it('find element by class name', function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.feedback-input').should('have.length', 4)
        cy.get('.contact_button').should('have.length.above', 1)
    })


    it('find element by css selector', function(){
        // input[attribute = "value"]
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')

    })

    it('find element by id', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('#contact_form').should('exist')

    })

    it('find element by tagName',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.text','CONTACT US')

    })

     // partial link text -- cy.contains()
     it('find element by link text',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.contains('Cypress with Cucumber BDD').should('exist') 

        cy.contains('My Courses & ').should('exist')
     })

     it('find element by link text',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.contains('Cypress with Cucumber BDD').should('be.visible') 
     })   

} )