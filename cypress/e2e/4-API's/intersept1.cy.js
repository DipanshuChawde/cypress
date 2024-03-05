///<reference types="cypress" /> 
describe("verify the intersept calls",function(){
    
   

    it(' get comment',function(){

        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"
        }).as("getComment")

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait("@getComment").then(function({response}){
            //cy.wait('@getComment') waits for the intercepted request to complete before proceeding with the test.
            //cy.log(response)
            expect(response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain','laudantium')
        })
       
    })
})


// In Cypress, intercepts are related to network requests.
// Cypress is primarily used for end-to-end testing of web applications, 
// and one aspect of testing involves interacting with network requests such as HTTP requests.
// Intercepts in Cypress refer to the ability to intercept and control HTTP requests made by the application under test. 
// This feature allows testers to stub or mock network responses, simulate various network conditions, or assert that certain requests were made.
// By intercepting network requests, testers can ensure that the application behaves correctly under different scenarios, 
// such as handling server errors, timeouts, or unexpected responses.

// Intercepts in Cypress can be used for a variety of purposes:

// Stubbing Responses: You can intercept requests to specific endpoints and provide predefined responses. 
// This allows you to simulate server behavior without relying on the actual backend.

// Simulating Network Conditions: You can delay responses, throttle network speeds, or even simulate network errors. 
// This helps ensure that your application behaves correctly under different network conditions.

// Validating Requests: You can intercept requests to ensure that they are being made correctly, 
// with the expected parameters and headers.

// Modifying Requests and Responses: You can intercept requests and modify their payloads or headers before they are sent, 
// or intercept responses and modify their content before they reach the application.