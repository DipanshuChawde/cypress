/// <reference types="cypress" />

describe('verify the autosuggestive drop',function(){
    it('select a specific value from auto sugesstive drop',function(){
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.title().should("include","WebDriver | Contact Us")
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list>div').each(function($el){
            if($el.text()=='Almond'){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include','Almond')
            }
            //cy.log($el.text())
        }).then(function(){
            
            cy.get('#myInput').type('P')
            cy.get('#myInputautocomplete-list>div').each(function($el){
            if($el.text()=='Pizza'){
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include','Pizza')
            }    
   })

    })
})
})
