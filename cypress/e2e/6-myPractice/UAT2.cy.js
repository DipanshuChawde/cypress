/// <reference types="cypress" />
//import { invoke } from "cypress/types/lodash"
//import { forEach } from "cypress/types/lodash"

describe("future date selection in red bus ",function(){
    it.only("adoda.com",function(){

        let date =   new Date()
      
        cy.log(date.getFullYear())
        cy.log(date.getMonth()) //count start form 0 so display 1 for febutary
        cy.log(date.getDate())
      
        let date2  = new Date()
        date2.setDate(date2.getDate()+17)
        let x=date2.toLocaleString('default', { month: 'short' })
        let futureDate=date2.getDate()+" "+x+" "+date2.getFullYear()
     
      
        cy.log(futureDate)

        let year = date2.getFullYear()
        let numberMonth = date2.getMonth()
        let sDate = date2.getDate()
        let smonth = date2.toLocaleString("default",{month:"long"})

        cy.log(smonth)
        cy.log(year)
        cy.log(sDate)

        cy.visit('https://uat.windsurfercrs.com/ibe/index.aspx?hotelID=14589&lang=en-us&currID=1&childAges=&adults=1')
        cy.get('[id="txArrival"]').click()
        cy.wait(4000)


        function selectMonthAndDate(){
           
            cy.get('[class="calMonth visible"]').first().find('[class="calHead"]').first().invoke('text').then(function(el){
                cy.log(el)
                  if(!el.includes(smonth+" "+year)){ //(includea(smonth+" "+year))
                      cy.get('[data-icon=""]').click({force:true})   
                      cy.log(el)
                      //cy.log(smonth+" "+year)
                      selectMonthAndDate() 
                    }
                })
        }

        function selectDate(){
            cy.get('[class="calMonth visible"]').first().find('[class="calDays"]').first().find('[class="pointer"]')
            .each(function($el, index, $list){
                if($el.text().split('$')[0]==sDate){
                    cy.wrap($el).as('currentElement')
                    cy.get('@currentElement').click({force: true})
                }
            })
        }    

        selectMonthAndDate()
        selectDate()
    })
})
        
        

     

