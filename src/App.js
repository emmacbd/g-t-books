import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { fetchBooks } from './apiCalls';
import MainShelf from './Components/MainShelf';
import SaveShelf from './Components/SaveShelf';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import './App.css';



class App extends Component {
  constructor() {
    super();

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
    const isSaved = this.state.savedBooks.find(foundBook => foundBook.id === book.id)
    if (!isSaved) {
      this.setState({ savedBooks: [...this.state.savedBooks, book] })
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
          <Route exact path='/' render={() =>
            <MainShelf bookDrop={this.state.filteredBooks} filterBooks={this.filterBooks} />} />
          <Route exact path='/:id' render={(match) => <BookDetails id={match.params.id} saveBook={this.saveBook} />} />
          <Route exact path="/my-shelf" render={() => {
            <SaveShelf savedBooks={this.state.savedBooks}
            />
          }} />
        </main>
      </div>
    )
  }




}


export default App;

