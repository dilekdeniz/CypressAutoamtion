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
  
    it.skip('Test 2',()=>{
        expect(false).to.equal(false);

    })
   
     it('Test 3',()=>{
        expect(false).not.to.equal(true);
     })
  
    it('Test 4',()=>{
        expect(5).to.equal(5);
    })
     it('Test 5',()=>{
        expect(false).to.equal('5'==5);
     })

})