import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { fetchBooks } from '../apiCalls';
import MainShelf from './MainShelf';
import SaveShelf from './SaveShelf';
import Navbar from './Navbar';
import '../styles/App.css';



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
      .then(data => this.setState({ bookData: data.results, filteredBooks: data.results, savedBooks: [] }))
      .catch(error => {
        console.log("Oh no!", error)
      });
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1>GÜT BOOKS</h1>
        </header>
        <main className="shelf-display">
          <Route exact path='/' render={() => <MainShelf bookData={this.state.filteredBooks} />} />
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

