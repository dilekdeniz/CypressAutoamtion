/// <reference types="cypress" />
describe('contesxt:My First Tests',()=>{
    before(()=>{
        //runs once before all test cases in this decribe block,like beforeClass in TestNG

    })
    beforeEach(()=>{
       //run before each case,beforeMEthod in TestNG
       cy.clearCookies();

    })
    after(()=>{
        //similar to afterClass in TestNG runs once after all test finish

    })
    afterEach(()=>{
        //similar to afterMEthod in TestNG
    })
    it('Opening a web application',()=>{
    cy.visit('/registration_form'); 
   // cy.get('.list-group > :nth-child(2)').
   // click();
   // cy.get('.list-group > :nth-child(1)').click();
    })
    //open Cypress| Set"only"
    it('Test 2',()=>{
        expect(false).to.equal(false);

    })
     //open Cypress| Set"only"
     it('Test 3',()=>{
        expect(false).to.equal(true);
     })
      //open Cypress| Set"only"
    it('Test 4',()=>{
        expect(false).to.equal(5);
    })
     //open Cypress| Set"only"
     it('Test 5',()=>{
        expect(false).to.equal('5'==5);
     })

})