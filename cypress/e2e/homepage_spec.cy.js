describe('Page on load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://gutendex.com/books/', { fixture: 'book-data.json' })
    cy.visit('http://localhost:3000/')
  })


  it('Should have page title that says GÜT BOOKS', () => {
    cy.get('h1').contains('GÜT BOOKS')
  })

  it('Should display nav bar with links to all books and my shelf', () => {
    cy.get('.nav-link').children().first().contains('ALL BOOKS')
    cy.get('.nav-link').children().last().contains('MY SHELF')
  })

  it('Should be able to click on All Books NavLink', () => {
    cy.contains('ALL BOOKS').click({ force: true })
    cy.url().should('eq', 'http://localhost:3000/')
  })


  it('Should be able to click on My Shelf NavLink', () => {
    cy.contains('MY SHELF').click({ force: true })
    cy.url().should('eq', 'http://localhost:3000/saved')
  })


  it('Should be able return to Home Page', () => {
    cy.visit('http://localhost:3000/saved')
    cy.contains('ALL BOOKS').click({ force: true })
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('h1').contains('GÜT BOOKS')
    
  })
})

describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://gutendex.com/books/', {
      statusCode: 404,
      body: {
        message: 'Sorry but that file cannot be found'
      }
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display error book message', () => {
    cy.get('.shelf-wrapper').contains('Terribly sorry, old friend, we could not retrieve your book!')
  })

})