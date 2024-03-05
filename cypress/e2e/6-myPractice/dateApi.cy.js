/// <reference types="cypress" />

//import { invoke } from "cypress/types/lodash"

//import { forEach } from "cypress/types/lodash"

describe("future date selection in red bus ",function(){
    it("booking future date selection", function(){
       cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
       cy.get('[class="glyphicon glyphicon-calendar"]').click()
       cy.get('[class="year active"]').click({force: true}) 
       cy.get('[class="month"]').span('Mar')
    })

    it.only("adoda.com",function(){

        let date =   new Date()
        
        cy.log(date.getFullYear())
        cy.log(date.getMonth()) //count start form 0 so display 1 for febutary
        cy.log(date.getDate())
        
        // 15 August 2023

        let date2  = new Date()
        date2.setDate(date2.getDate()+40)
        let x=date2.toLocaleString('default', { month: 'short' })
        let futureDate=date2.getDate()+" "+x+" "+date2.getFullYear()
        //8 Mar 2024
        
        cy.log(futureDate)

        let year = date2.getFullYear()
        let numberMonth = date2.getMonth()
        let sDate = date2.getDate()
        let smonth = date2.toLocaleString("default",{month:"long"})

        cy.log(smonth)
        cy.log(year)
        cy.log(sDate)




        cy.visit('https://www.agoda.com/en-in/?ds=OaBHQ7nMECOahY14')
        cy.get("#textInput").click()
        cy.get('[data-element-value="Hyderabad"]').click()
        cy.get('[data-selenium="checkInText"]')
        
       function selectMonthAndDate(){
            cy.get('[class="DayPicker-Caption DayPicker-Caption-Wide"]').first().invoke('text').then(function(el){
                //cy.log(el)
                if(!el.includes(year)){
                    cy.get('[data-selenium="calendar-next-month-button"]').last().click({force:true})
                    selectMonthAndDate()
                }
                
                })

                cy.get('[class="DayPicker-Caption DayPicker-Caption-Wide"]').first().invoke('text').then(function(el){
                    cy.log(el)
                    if(!el.includes(smonth)){
                        cy.wait(4000)
                        if(!el.includes(smonth)){
                        cy.get('[data-selenium="calendar-next-month-button"]').click({force:true})
                        selectMonthAndDate()
                    }
                }
                })
            }
                 
                function selectDate(){
                    cy.get('[role="rowgroup"]').next().children().children().children().children().children().invoke('text')
                    cy.contains(sDate).click({force: true})
                }
                    selectMonthAndDate()
                    selectDate()
                //cy.get('[data-selenium="checkInText"]').should('have.text',futureDate)
          
            })
        })          
          
          
                // } 
            
            //function selectDate(){
                        //cy.contains(sDate).click()
                        // cy.get('[role="rowgroup"]').next().children().children().children().children().children().then(function(el){
                        //     cy.log(el)
                        //     if(cy.get('[class="PriceSurgePicker-Day__label PriceSurgePicker-Day__label--wide"]').contains(sDate)){
                        //         cy.log(el)
                            //     //cy.get('[class="PriceSurgePicker-Day__label PriceSurgePicker-Day__label--wide"]'
                            // }
                            
                                // if(el==sDate){
                                //     cy.log(el)
                                // element.click()
                                // }
                            // })
                        
                            //     cy.log(el)
                            //cy.get(contains(sDate).click()
                        //})
                        //cy.get('[class="Popup__content Popup__content_Occupancy"]').find('[class="PriceSurgePicker-Day__label PriceSurgePicker-Day__label--wide]').contains(sDate).click()
                       // cy.get('[class="PriceSurgePicker-Day__label PriceSurgePicker-Day__label--wide]').contains(sDate).click()
                        //cy.get('[role="rowgroup"]').next().find('[class="PriceSurgePicker-Day__label PriceSurgePicker-Day__label--wide"]').contains(sDate).click()
                        //.then(function(el){
                            //     cy.log(el)    
                        // cy.log(a)
                   // })
                    //selectMonthAndDate()
                    //selectDate()
            

  
