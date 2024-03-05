///<reference types="cypress" />
//---------mycode------------------------------------------------------------------------------------------------------
// import ud from "../../fixtures/basicAPIFixture1Payload.json"
// import up from "../../fixtures/basicAPIFixture1Payload2.json"
// describe("verify POST, PUT request of reqress",function(){
//     it('POST request from payload',function(){
//         cy.request({
//             url:"https://reqres.in/api/users",
//             method:"POST",
//             body:ud
//         }).then(function(response){
//             //cy.log(response)
//             expect(response.status).to.eq(201)
//             return response.id
//         }).then(function(id){
//             cy.request({
//                 url:`https://reqres.in/api/users/${id}`,
//                 method:"PUT",
//                 body:up
//             }).then(function(res){
//                 cy.log(res)
//             })
//         })

//     })
// })

//-----------------------------my code end plz commend my code to run sir code------------------------

//----------------------- sir code-------------------------------------

describe("verify POST, PUT request of reqress",function(){
    it('POST request from payload',function(){
        cy.fixture('basicAPIFixture1Payload').then(function(el){
            cy.log(el)
            let x=el.name
            cy.request({
                url:"https://reqres.in/api/users",
                method:"POST",
                body:el
            }).then(function(response){
                cy.log(response)
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(x)
                //return response.id
            })
        })
        
    }) 
})           