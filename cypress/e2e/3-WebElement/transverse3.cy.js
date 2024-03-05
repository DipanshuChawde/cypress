/// <reference types ="cypress" /> 

describe("transverse day3 ", function(){
    it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('button').filter('.btn-outline-info').should('have.length', 2) //finds legnth==2 for tag=button and class=.btn-outline-info
        
        //my tryout
        cy.get('.btn-primary').filter('.active').should('have.text', 'Button-1') //finds text=Button-1 for class==.btn-primary and filter for class==.active
        cy.get('.traversal-food-list').children().filter('.list-header').should('have.length', 2)
        cy.get('.traversal-food-list').children().filter('.list-header').should('have.length',2)
    })  
    
    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)

        //my tryouy
        cy.get('.traversal-button-states').children().not('.active').should('have.length', 4) //will give 4 coz ther is no element with class active
        cy.get('.btn-primary').not('.active').should('have.length', 8) // finds length of class==.btn-primary by filtering out class==.active which is ==8

    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get(".thumbnail").last().find("#coffee").should('have.text', 'Coffee')
        cy.get('.thumbnail').last().find('.list-header').should('have.length',3)

    })
    
    it.only('To get the closest ancestor DOM element, use the .closest() command.',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons').children().should('have.length', 5)

        cy.get('.traversal-buttons').closest('div[class="thumbnail"]').should('have.class','thumbnail')

        cy.get('#coffee').closest('div').should('have.class','thumbnail')

        cy.get('.traversal-drinks-list').closest('div').should('have.class','thumbnail')

    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parentsUntil('div[class="thumbnail"]').should('have.length',1)
        cy.get('#milk').parentsUntil('div[class="container"]').should('have.length',3)

    })

    it('To get parent DOM element of elements, use the .parent() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parent().should('have.class', 'traversal-drinks-list')

    })


    //difference between closest and parents()
    // closest gives closest parent given in closest bracket()
    //parents gives all above parent and you can put assertion on any of above



    it.only('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').closest('div').parents().should('have.class', 'container') //returns parent of #coffee above div

        //below assertion fails coz it will find out parents above div and ('have.class','traversal-drinks-list') is parent of #coffee but below div
        //cy.get('#coffee').closest('div').parents().should('have.class', 'traversal-drinks-list')

        cy.get('#coffee').parents().should('have.class', 'container') //check whether one of the parent is('have.class', 'container') or not

    })    
})