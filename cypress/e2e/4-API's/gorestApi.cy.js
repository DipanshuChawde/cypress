///<reference types="cypress" />

//end to end testing create user update same user and delete same user in one iest case

describe('API testing for go rest APi - E2E',function(){

     // client id  secret Id ------> API call -----> token -----> other calls
    let token=`2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e`

    it('Create a user , retrive , update , delete',function(){
        cy.request({
        method:"POST",
        url:"https://gorest.co.in/public/v2/users",
        body:{
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `chinmay${Math.floor(Math.random()*1000)}@gmail.com`,
                "status": "active"
            },
        headers:{
            Authorization:`Bearer ${token}`
        }
        }).then(function(response){ //check user created and return id for next then block which is for update
            //cy.log(response)
            expect(response.status).to.equal(201)
            return response.body.id
        }).then(function(id){
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    "name": "dipanshu chawde",
                    "email": `chinmay${Math.floor(Math.random() * 1000)}@gmail.com`,
                    "status": "active"
                },
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }).then(function(response){
                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys("id","name","email","status","gender")
                expect(response.body.name).to.eq("dipanshu chawde")
                return
            }).then(function(){
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }).then(function(response){
                    expect(response.status).to.equal(204)
                })

            })
         })
    })
})


//code executed perfectly may give some time error due id mismatch no error in code