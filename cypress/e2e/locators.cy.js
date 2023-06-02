/// <reference types="cypress" />
describe('Find or Get elements by using different locators',()=>{
    beforeEach(()=>{
        //run before each case,beforeMEthod in TestNG
        cy.clearCookies();
        cy.visit('/login'); 
    })
    it('Check different locators strategies',()=>{
        //by css locator
        cy.get("input[name='username']").type("CydeoStudent");
        //every statment creates an object to be interacted,and next command makes operations to the created 
        //at the previous statment
        //attribute name and value
        cy.get("[type='text']").clear();//clears what  is typed
        cy.get("input").each((item,index,list)=>{
            //assert the lenght of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr.apply("type");
        })
    })
})