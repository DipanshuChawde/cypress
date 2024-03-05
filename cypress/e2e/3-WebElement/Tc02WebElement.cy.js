//const { describe } = require("mocha");

describe('verify contact functionality', ()=>{
    it('click() finction on contact page', ()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshuchoude@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
        cy.get('h1').should('exist')
    })

    it('clear() on contact page',()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshuchoude@gmail.com')
        cy.get('[name="message"]').type('i am learning cypress')
        cy.get('[name="first_name"]').clear()
        cy.get('[name="first_name"]').should('have.text','')

    })

    // <h2 name="contactme" class="section_header">CONTACT US</h2>

    it('verifying presence of attribute and getting attribute value by cy.log', ()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.attr', 'class')
        cy.get('h2').should('have.attr', 'name')
        cy.get('h2').should('have.attr','class','section_header')
        cy.get('h2').should('have.attr','name','contactme')

        cy.get('h2').invoke('attr', 'class').then(function(txt){ //txt is a variable which stors value trturn by callback function
            cy.log(txt)
        }) //invoke will find attribute class and gives value of attribute class

        cy.get('h2').invoke('attr','name').then(function(txt){
            cy.log(txt)
        })

    })

  
    it ('verifying text contact us and getting text contact us',()=>{
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2').should('have.text', 'CONTACT US')

        cy.get('h2').invoke('text').then(function(txt){
            cy.log(txt)
        })
        cy.get('h2').should('be.visible')
    })

    it('element to be checked', ()=>{
   
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="pumpkin"]').should('be.checked')
    }) 
    
    it('element to be dessabled', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="cabbage"]').should('be.disabled')
    })

    it('element to be enabled', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="lettuce"]').should('be.enabled')
    })

})