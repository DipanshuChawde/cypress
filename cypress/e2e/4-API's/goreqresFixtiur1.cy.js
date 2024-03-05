///<reference types="cypress" />
import postdata from "../../fixtures/payloadGoReqress1/POSTPayload.js"
import putdata from "../../fixtures/payloadGoReqress1/PUTPayload.js"

describe('verify e2e testing Goregres fixture',function(){
    let token=`2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e`
   // let i=-1;
    postdata.forEach(function(el,index){
        it(`verify POST,PUT,DELETE request user data ${index+1}`,function(){
            cy.request({
                url:"https://gorest.co.in/public/v2/users",
                method:"POST",
                body:el,
                headers: {
                    Authorization:`Bearer ${token}`
                }             
            }).then(function(response){
                //cy.log(response)
                expect(response.status).to.eq(201)
                return response.body.id
            }).then(function(id){
                    cy.request({
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    method:"PUT",
                    body:putdata[index],
                    headers: {
                        Authorization:`Bearer ${token}`
                    }                    
                }).then(function(res){
                    //cy.log(res.body.name)
                    expect(res.body.name).to.eq(putdata[index].name)
                    return
                }).then(function(){
                    cy.request({
                        url:`https://gorest.co.in/public/v2/users/${id}`,
                        method:"DELETE",
                        headers: {
                            Authorization:`Bearer ${token}`
                        }                    
                    }).then(function(response){
                        //cy.log(response)
                        expect(response.status).to.eq(204)
                    })   
    
                 })
             })
        })
      
    })
    

})
