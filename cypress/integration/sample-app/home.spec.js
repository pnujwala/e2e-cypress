/// <reference types="Cypress" />

context('Misc', () => {
    beforeEach(() => {
      cy.visit('https://ragavendra2018-3.herokuapp.com/')
    })
  
    it('has menu links-Todo', () => {
        cy.get('[routerlink="/todos"]').should('contain.text',"Todos"); 
    })

    it('has menu links-Stopwatch', () => {
        cy.get('[routerlink="/stopwatch"]').should('contain.text',"Stopwatch"); 
    })
  
    
  })
  