///<reference types="cypress"/>

describe("verify the API for GET POST PUT DELETE",function(){
    it("verify the total numbner of user per page",function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(response){
            cy.log(response)
            expect(response.body.per_page).to.eq(response.body.data.length)
        })
    })

    it("verify the user withname goerge",function(){
        let username="George"
        let flag=false
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"

        }).then(function(response){
            response.body.data.forEach(element => {
                if(element.first_name==username){
                flag=true
                return 
                }
            });
        }).then(function(){  //no need of argument
            expect(flag).to.eq(true)
        })
    })

    it("verify the post request",function(){
        let info={
            name:"dipanshu",
            job:"automation tester"

        }
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users?page=2",
            body:info
        }).then(function(response){
            cy.log(response)
            expect(response.body).to.have.keys(["name","job","id","createdAt"])
            expect(response.body.name).to.eq(info.name)
            expect(response.body.job).to.eq(info.job)
        })
    })

    it("verify the delete request",function(){
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then(function(response){
            cy.log(response)
            expect(response.body).to.eq("")
        })
    })

    it("verify the update request",function(){
        let info={
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:info
        }).then(function(response){
            //cy.log(response)
            expect(response.body.name).to.eq(info.name)
        })
    })
})