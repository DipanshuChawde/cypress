///<reference types="cypress" />

import data from "../../fixtures/contact4.json"
import dataset from "../../fixtures/contact5.js"

describe('verify the contact us form',function(){
    // for(let key in data){  // import from json file
    //     it(`contact usfrom data from fixture n forr loop for user ${key}`,function(){
    //         cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('[name="first_name"]').type(data[key].first_name)
    //         cy.get('[name="last_name"]').type(data[key].last_name)
    //         cy.get('[name="email"]').type(data[key].email)
    //         cy.get('[name="message"]').type(data[key].message)
    //         cy.get('[value="SUBMIT"]').click()
    //         cy.get('h1').should('have.text',"Thank You for your Message!")
    //     })
    // }

    dataset.forEach(function(el,index){
        it(`contact us form  fron JS dataset ${index+1}`,function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.first_name)
            cy.get('[name="last_name"]').type(el.last_name)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.message)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text',"Thank You for your Message!")
        })
    })
})

