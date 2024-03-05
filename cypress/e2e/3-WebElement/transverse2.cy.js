/// <reference types="cypress" />

//children() , prev() , next() , nextAll() , prevAll() ,next(),siblings()
// developer
// javscript ??
// create element 
// update element 
// retrive element 
// delete  element 

// add attribute 
// update attribute 
// delete attribute 
// retrive attribute
// user action

// tester 
//selection of the element 

describe('traverse method', function(){
    it('revision of day1', function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        // chidren()
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

        // next()
        cy.get('#coffee').next().should('have.attr', 'id', 'tea')
        cy.get('#coffee').next().should('have.text', 'Tea')

        //prev()
        cy.get('#tea').prev().should('have.attr', 'id', 'coffee')
        cy.get('#tea').prev().should('have.length', 1)
        cy.get('#tea').prev().should('have.text', 'Coffee')

        //nextAll()
        cy.get('#milk').nextAll().should('have.length', 2)

        //prevAll
        cy.get('#milk').prevAll().should('have.length', 2)

        //siblings()
        cy.get('#milk').siblings().should('have.length', 4)

    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#coffee').should('have.length', 3)
        cy.get('#espresso').prevUntil('#tea').should('have.length', 1)

    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length', 3)
        cy.get('#tea').nextUntil('#espresso').should('have.length', 1)

    })

    //first() 
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    }) 
    
    //last() 
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    }) 

    //eq()
    it.only('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')
        cy.get('.traversal-drinks-list').children().eq(0).should('have.text','Coffee')

    })

    // parent()
    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').parent().should('have.attr', 'class', 'traversal-drinks-list')
        cy.get('#veggie').parent().should('have.attr','class', 'traversal-food-list')
    })

})