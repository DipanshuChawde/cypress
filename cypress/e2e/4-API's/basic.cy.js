///<reference types="cypress" />

describe('APIs testing',function(){
    //structur of it block
    // it('verify the ststus code for PUT request',function(){
    //     cy.request({
    //     url:"" 
    //     method:""
    //     }).then(function(response){
            //assertion
    //     })
    // })


    it('verify the status code for GET request',function(){
        cy.request({
            url:'https://reqres.in/api/users?page=2',
            method:'GET'
        }).then(function(response){
            cy.log(response)//to check response.status value ..inpect on cy page and click on object and inpect
            expect(response.status).to.eq(200)//assertion
        })
    })

    it('verify the ststus code for PUT request',function(){
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }

        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(200)

        })
    })

    it('verify the ststus code for POST request',function(){
        cy.request({
            url:'https://reqres.in/api/users',
            method:'POST',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(201)
        })
    })

    it('verify the ststus code for DELETE REQUEST',function(){
        cy.request({
            url:'https://reqres.in/api/users/2',
            method:'DELETE',
        }).then(function(response){
            cy.log(response)
           expect(response.status).to.eq(204)
        })

    })
})