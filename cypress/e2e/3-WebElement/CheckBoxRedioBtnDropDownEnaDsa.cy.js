///<reference types="cypress" />

describe("DropDown,Checkboxes and Radio Buttons", function(){
    it('should select option from drop down', function(){
        //Arrengement
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //Action
        cy.get('#dropdowm-menu-1').select('Python')
        //Assertion
        //to check attribute value=python
        cy.get('#dropdowm-menu-1').should('have.value','python')

        //to check value =mevon
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven')

    })

    it('should select check box', function(){
        //Arrangement
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
        //Action
        cy.get('[value="option-1"]').click()   //using click()
        //Assertion
        cy.get('[value="option-1"]').should('be.checked')

        //using check and uncheck function

        cy.get('[value="option-1"]').uncheck().should('not.be.checked')
        cy.get('input[value= "option-3"]').check()
        cy.get('input[value= "option-3"]').should('be.checked')
        cy.get('input[value= "option-3"]').uncheck()
        cy.get('input[value= "option-3"]').should('not.be.checked')

    })

    it.only('should select radio buttons', function(){
        //Arrangement
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
        //Action
        cy.get('[value="green"]').check().should('be.checked')
        //Assertion
        cy.get('[value="green"]').should('be.checked')

        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="green"]').should('not.be.checked')




    })
})