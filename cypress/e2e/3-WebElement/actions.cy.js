/// <reference types="cypress" />

describe('action element', function(){
    it('drag n drop',function(){
          // mousedown 
        // mousemove
        // mouseup
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html#')
        cy.get('#draggable').trigger('mousedown', {button:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force: true})
        cy.get('#droppable').should('contain', 'Dropped!')
    })

    it('double click',function(){

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html#')
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('contain','Double Click Me!')
    })  
    
    it('click and hold',function(){
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html#')
        cy.get('#click-box').trigger('mousedown').should('contain','Well done!')
        cy.get('#click-box').trigger('mouseup').should('contain','Dont release me!!!')


        
        cy.get('#div-hover > div.dropdown.hover > button').trigger('mouseover')
        cy.get('#div-hover > div.dropdown.hover > div > a').should('exist')
    })
  
})