// create senario and testcses



describe('verify the we elements', ()=>{      //test scenerio

    it('verify contact functionality', ()=>{
            // visit url
    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')    

    //type in to input fields
    //tagname [attribute: value]

    cy.get('input[name="first_name"]').type('dipanshu')
    cy.get('input[name="last_name"]').type('chawde')
    cy.get('input[name="email"]').type('dipanshuchawde@gmail.com')
    cy.get('textarea[name="message"]').type('i am learning cypress')
    cy.get('input[type="submit"]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

})