///<reference types="cypress" />

describe("verify the intercept",function(){
    it('get command',function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"

        },{
            body:{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "dipanshu chawde"
              }
        }).as('getCommand')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getCommand').then(function({request,response}){  //destructuring of response object and gettin only request and response property
            cy.log(request)
            cy.log(response)
            expect(request.method).to.eq('GET')
            expect(response.statusCode).to.eq(200)
            cy.get('.network-comment').should('have.text',response.body.body)
        })
            
    })

    it('verify POST comment',function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments",
            method:"POST" 
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait("@postComment").then(function(res){    
            //cy.wait('@postComment') waits for the intercepted request to complete before proceeding with the test.
            cy.log(res)
            //cy.log(res.response.statusCode)
            
            cy.get('.network-post-comment').should('have.text',"POST successful!")
            expect(res.response.statusCode).to.eq(201)

        })
    })

    it('verify update comment',function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"PUT"
        }).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then(function(response){
            //cy.wait('@getComment') waits for the intercepted request to complete before proceeding with the test.
            cy.log(response)
            expect(response.response.statusCode).to.eq(200)
        })
    })
})