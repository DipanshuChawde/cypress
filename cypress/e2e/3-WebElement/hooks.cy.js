//test suits
//test cases

before(function(){
    cy.log("I will run first")
})

after(function(){
    cy.log("i will run last")
})

beforeEach(function(){
    cy.log("i will run before each test case")
})

afterEach(function(){
    cy.log("i will run after each test case")
})

it("test case 1", function(){
    cy.log("i am test case one")
})

it("test case 2",function(){
    cy.log("i am test case two")
})



// log  I will run first                    --before blocl
// logi will run before each test case      --beforeEach block
// logi am test case one                    --it block test case 1 
// logi will run after each test case       --afterEach block
// logi will run before each test case      --beforeEach block  
// logi am test case two                    --it block test case 2
// logi will run after each test case       --afterEach block
// logi will run last                       --after block