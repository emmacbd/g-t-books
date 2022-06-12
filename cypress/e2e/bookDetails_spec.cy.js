describe('Book Details Page', () => {
    beforeEach(() => {
        cy.intercept("https://gutendex.com/books/", { fixture: "book-data.json" })
        cy.intercept('https://gutendex.com/books/1342', { fixture: 'pandp.json' })
        cy.visit('http://localhost:3000/1342')
    })

    it('Should have page title that says GÜT BOOKS', () => {
        cy.get('h1').contains('GÜT BOOKS')
    })

    it('Should display selected book information', () => {
        cy.visit('http://localhost:3000')
        cy.get('.book-nav').should('have.length', 3)
        cy.get('.book').first().click()
        cy.url().should('eq', 'http://localhost:3000/1342')
        cy.get('.selected-book-info').find('img').should('have.attr','src', 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.small.jpg')
        cy.get('.save-button')
        .should('be.visible')
        cy.url().should('eq', 'http://localhost:3000/1342')
    })

    it('Should be able to return to All Books page from Details page', () => {
        cy.url().should('eq', 'http://localhost:3000/1342')
        cy.contains('ALL BOOKS').click({ force: true })
        cy.url().should('eq', 'http://localhost:3000/')
    })
})