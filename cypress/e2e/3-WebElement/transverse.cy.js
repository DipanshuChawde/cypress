/// <reference types="cypress" />
describe("transversal metnod", function(){

    it("To get children of DOM elements, use the .children() command.", function(){
        cy.visit("https://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get(".traversal-button-states").children().should("have.length", 4)   //gives children of  
        cy.get(".traversal-food-list").children().should('have.length', 11)
    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get("#milk").prev().should('have.text','Tea') //prev()returns previous sibling
        cy.get('#sugar').prev().should('have.text', 'Espresso')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get("#milk").next().should('have.text','Espresso') //prev()returns previous sibling
        cy.get('#coffee').next().should('have.text', 'Tea')

    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length', 4)
        cy.get('#coffee').nextAll().should('have.length',4)
        cy.get('#espresso').nextAll().should('have.length',1)

    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should("have.length", 4)
        cy.get('#milk').prevAll().should("have.length", 2)

    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length', 4)
        cy.get('#fruits').siblings().should("have.length", 10)

    })
})
