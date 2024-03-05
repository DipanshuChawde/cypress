///<reference types="cypress" />

import ud from "../../fixtures/contact2.json" //for test case 7,8,9
import us from "../../fixtures/contact3.js" //for test case 10

let info={   //for testcase2 
    first_name:'rucha',
    last_name:'gaware',
    email:'ruchagaware@gmail.com',
    message:'i m learning Power bi',
    
}



describe('verify the contact us form',function(){

    //hooks for test case 
    // let usredata=undefined
    // before(function(){
    //     cy.fixture('contact2').then((user)=>{
    //         usredata=user
    //     })
    // })

    // let jsUserData=undefined //for  
    // before(function(){
    //     cy.fixture('contact3').then(function(userjs){
    //         jsUserData=userjs
    //     })
    // })

    it('1.contact us form from above defined object',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('dipanshu')
        cy.get('[name="last_name"]').type('chawde')
        cy.get('[name="email"]').type('dipanshuchoude@gmail.com')
        cy.get('[name="message"]').type('i m learning cypress')
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('2.contact us form in testcase for hard coded', function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(info.first_name)
        cy.get('[name="last_name"]').type(info.last_name)
        cy.get('[name="email"]').type(info.email)
        cy.get('[name="message"]').type(info.message)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('3.contact us from contact',function(){
        cy.fixture('contact').then(function(data){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(data.first_name)
            cy.get('[name="last_name"]').type(data.last_name)
            cy.get('[name="email"]').type(data.email)
            cy.get('[name="message"]').type(data.message)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text',"Thank You for your Message!")
        })
            
    })
    

    it('4.contact us form with user data two from contact2',function(){
        cy.fixture("contact2").then(function(user){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user.userOne.first_name)
            cy.get('[name="last_name"]').type(user.userOne.last_name)
            cy.get('[name="email"]').type(user.userOne.email)
            cy.get('[name="message"]').type(user.userOne.message)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text',"Thank You for your Message!")
        })
    })
    it('5.contact us form with user data two from contact2',function(){
        cy.fixture("contact2").then(function(user){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user.userTwo.first_name)
            cy.get('[name="last_name"]').type(user.userTwo.last_name)
            cy.get('[name="email"]').type(user.userTwo.email)
            cy.get('[name="message"]').type(user.userTwo.message)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text',"Thank You for your Message!")
        })
    })

    it.only('6.contact us form with user data two from contact2 for loop',function(){
        cy.fixture("contact2").then(function(users){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.log(users)
            for(let keys in users){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')    
            cy.get('[name="first_name"]').type(users[keys].first_name)
            cy.get('[name="last_name"]').type(users[keys].last_name)
            cy.get('[name="email"]').type(users[keys].email)
            cy.get('[name="message"]').type(users[keys].message)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text',"Thank You for your Message!")
            }
        })
    })

    it('7.contact us form with user data from import json',function(){
        cy.log(ud)        
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(ud.userTwo.first_name)
        cy.get('[name="last_name"]').type(ud.userTwo.last_name)
        cy.get('[name="email"]').type(ud.userTwo.email)
        cy.get('[name="message"]').type(ud.userTwo.message)
        cy.get('[value="SUBMIT"]').click()
        cy.wait(4000)
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('8.contact us form with user data from import json',function(){
        cy.log(ud)        
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(ud.userOne.first_name)
        cy.get('[name="last_name"]').type(ud.userOne.last_name)
        cy.get('[name="email"]').type(ud.userOne.email)
        cy.get('[name="message"]').type(ud.userOne.message)
        cy.get('[value="SUBMIT"]').click()
        cy.wait(4000)
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('9.contact us form with user data from import json for loop',function(){
        cy.log(ud)    
        for(let key in ud){    
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(ud[key].first_name)
        cy.get('[name="last_name"]').type(ud[key].last_name)
        cy.get('[name="email"]').type(ud[key].email)
        cy.get('[name="message"]').type(ud[key].message)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
        }
    })
    it('10.contact us form with user data from import js data file',function(){
        cy.log(us)
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(us.first_name)
        cy.get('[name="last_name"]').type(us.last_name)
        cy.get('[name="email"]').type(us.email)
        cy.get('[name="message"]').type(us.message)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    
})