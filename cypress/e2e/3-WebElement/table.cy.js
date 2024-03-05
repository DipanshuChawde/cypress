/// <reference types="cypress" />

describe('table automation', function(){
    it('table one', function(){
        let sum=0
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get("#t01").find('tr').each(function(row,index){
            if(index!=0){
            let age=row.find('td').last().text()
            sum=sum +Number(age)
            }
            cy.log(sum)
        })
       
    })
})