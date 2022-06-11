import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchBooks } from './apiCalls';
import MainShelf from './Components/MainShelf';
import SaveShelf from './Components/SaveShelf';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import './App.css';



class App extends Component {
  constructor() {
    super()

    this.state = {
      bookData: [],
      filteredBooks: [],
      savedBooks: []
    }
  }


  componentDidMount() {
    fetchBooks()
      .then(data => this.setState({ bookData: data.results, filteredBooks: data.results }))
      .catch(error => {
        console.log("Oh no!", error)
      });
  }

  filterBooks = (subject) => {
    if (subject === 'Any') {
      this.setState({ filteredBooks: this.state.bookData })
    } else {
      let filtBySubject = this.state.bookData.filter(book => {
        let combinedSubjects = book.subjects.join(' ')
        return combinedSubjects.includes(subject)

      })
      this.setState({ filteredBooks: filtBySubject })
    }
  }

  saveBook = (book) => {
    if (!this.state.savedBooks.includes(book)) {
      console.log('saved book', book)
      this.setState({ savedBooks: [...this.state.savedBooks, book ]})
      console.log(this.state.savedBooks)
    }

  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>GÜT  BOOKS</h1>
          < Navbar />
        </header>
        <main className="shelf-display">
          <Switch >
            <Route exact path='/' render={() =>
              <MainShelf bookDrop={this.state.filteredBooks} filterBooks={this.filterBooks} />} />

            <Route path="/saved" render={() => {
              <SaveShelf savedBooks={this.state.savedBooks} filterBooks={this.filterBooks} />
            }} />
            <Route path='/:id' render={({ match }) => {
              let bookToRender = this.state.bookData.find(book => book.id === match.params.id)
              return <BookDetails {...bookToRender} bookId={match.params.id} saveBook={this.saveBook} />
            }} />
          </Switch>

        </main>
      </div>
    )
  }




}


export default App;

