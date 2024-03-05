// /// <reference types="cypress" />
// describe('learning to manage iframe in cypress',function(){
//     it('learning to manage iframe - jquery',function(){
//         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//         cy.get
//     })
// })


// //incomplete


//--------------------copypaste----------------------------

/// <reference types="cypress" />

let iframeExist = function(id){
    return cy.get(`#${id}`).its('0.contentDocument').should('exist') //document
 }
 const bodyExist = function(id){
     return iframeExist(id).its('body').should('not.be.undefined').then(cy.wrap)
 }
 
 describe('learning to manage iframe in cypress',function(){
 
     it.only('learning to manage iframe - jquery',function(){
         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
         // cy.get('.active').last().children().then(function(el){
            // expect(el.text()).to.eq('Home')
         //})
        // cy.contains('Home')
        /// contents() --- jquery()
         cy.get('#frame').then(function($iframe){
             let document = $iframe.contents()// document
             cy.wrap(document).find('body').as('iframebody')
         })
         cy.get('@iframebody').contains("Home").should('have.attr','href')
     })
 
     it('learning to manage iframe - javascript',function(){
         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
         cy.get('#frame').then(function(iframe){
             let document = iframe['0'].contentDocument  //document
             cy.wrap(document).find('body').as('iframebody')
         })
         cy.get('@iframebody').contains("Home").should('have.attr','href')
 
     })
 
 
     it('learning to manage iframe - javascript',function(){
         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
         bodyExist('frame').contains('Home').should('have.attr','href')
     })
 
    // prequisite --- javascript / dom / ajax
 
    
 
 
 
 
 })