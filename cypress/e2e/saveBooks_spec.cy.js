describe('My Shelf Page', () => {
  beforeEach(() => {
    cy.intercept('https://gutendex.com/books', { fixture: 'book-data.json' })
    cy.intercept('https://gutendex.com/books/1342', { fixture: 'pandp.json' })
    cy.visit('http://localhost:3000')
  })

  it('Should have page title that says GÜT BOOKS', () => {
    cy.get('h1').contains('GÜT BOOKS')
  })

  it('Should be able to click on selected book and see it on saved shelf', () => {
    cy.get('.book-nav').should('have.length', 3)
    cy.get('.book').first().click()
    cy.url().should('eq', 'http://localhost:3000/1342')
    cy.get('.save-button').click({ force: true })
    cy.get('.nav-link').eq(1).click()
    cy.get('.save-shelf').should('have.length', 1)

  })

  it('Should be able to add another book to saved shelf', () => {
    cy.get('.book').last().click()
    cy.get('.save-button').click()
    cy.get('.nav-link').eq(1).click()
    cy.get('.save-shelf').should('have.length', 1)
  })
})