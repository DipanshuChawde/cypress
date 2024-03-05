describe("verify contact us form",function(){
    this.beforeEach(function(){
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("dipanshu")
        cy.get('[name="last_name"]').type("chawde")
        cy.get('[name="email"]').type("dipanshuchoude@gmail.com")
        cy.get('[name="message"]').type("i am learning cypress")

    })

    it("contact us submit button", function(){
        
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it("contact us reset button", function(){
        
        cy.get('[value="RESET"]').click()
        cy.get('[name="first_name"]').should('have.text',"")
    })

    this.afterEach(function(){
        cy.clearAllCookies()
    })
})