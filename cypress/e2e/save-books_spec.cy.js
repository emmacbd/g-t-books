describe('My Shelf Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://gutendex.com/books/', { fixture: 'pandp.json' })
        cy.visit('http://localhost:3000')
    })

    it('Should have page title that says GÜT BOOKS', () => {
        cy.get('h1').contains('GÜT BOOKS')
    })

      it('Should be able to click on selected book', () => {
        cy.intercept('GET', 'https://gutendex.com/book/1342', { fixture: 'pandp.json' })
        cy.contains('Pride').click()
        cy.url().should('eq', 'http://localhost:3000/1342')
      })
    
})