import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchBooks } from '../../apiCalls';
import MainShelf from '../MainShelf/MainShelf';
import SaveShelf from '../SaveShelf/SaveShelf';
import BookDetails from '../BookDetails/BookDetails';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
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
      this.setState({ savedBooks: [...this.state.savedBooks, book] })
    }

  }

  removeBook = (id) => {
    const updatedBooks = this.state.savedBooks.filter(book => book.id != id);

    this.setState({ savedBooks: updatedBooks });
  
  }


  render() {
    return (
      <>
      <div className="App">
        <Header />
        <main className="main">
          <Switch >
            <Route exact path='/' render={() =>
              <MainShelf bookDrop={this.state.filteredBooks} filterBooks={this.filterBooks} />} />

            <Route exact path='/saved' render={() => {
              <SaveShelf savedBooks={this.state.savedBooks} filterBooks={this.filterBooks} />
            }} />
            <Route path='/:id' render={({ match }) => {
              let bookToRender = this.state.bookData.find(book => book.id === match.params.id)
              return <BookDetails {...bookToRender} bookId={match.params.id} saveBook={this.saveBook} savedBooks={this.state.savedBooks} removeBook={this.removeBook}/>
            }} />
          </Switch>

        </main>
      </div>
      </>
    )
  }




}


export default App;

