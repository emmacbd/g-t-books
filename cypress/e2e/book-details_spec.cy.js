describe('Book Details Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://gutendex.com/books/', { fixture: 'pandp.json' })
        cy.visit('http://localhost:3000/1342')
    })

    it('Should have page title that says GÜT BOOKS', () => {
        cy.get('h1').contains('GÜT BOOKS')
    })

    it('Should display selected book information', () => {
        cy.get('.selected-book-section').contains('Pride and Prejudice')
        cy.get('.selected-book-info').contains('https://www.gutenberg.org/cache/epub/1342/pg1342.cover.small.jpg')
        cy.url().should('eq', 'http://localhost:3000/1342')
    })

})