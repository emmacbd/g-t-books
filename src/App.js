import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchBooks } from './apiCalls';
import MainShelf from './Components/MainShelf';
import SaveShelf from './Components/SaveShelf';
import BookDetails from './Components/BookDetails';
import Navbar from './Components/Navbar';
import './App.css';



const App = () => {

  const [allBooks, setBooks] = useState([])
  // const [filteredBooks, setFilter] = useState([])
  const [savedBooks, setSaved] = useState([])
  const [error, setError] = useState('')


  // useEffect(() => {
  //   fetchBooks()
  //     .then(data => setBooks(data))
  //     .catch(error => {
  //       console.log("Oh no!", error)
  //     });
  //   console.log(allBooks)
  // }, [])


  const getBooks = async () => {
    const url = 'https://gutendex.com/books'
    setError('')

    try {
      const response = await fetch(url)
      const allBooks = await response.json()
      setBooks(allBooks)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getBooks()
  },[])
  // useEffect(() => {
  //   fetchBooks()
  //     .then(data => setFilter(data))
  //     .catch(error => {
  //       console.log("Oh no!", error)
  //     });
  // }, [])


  const filterBooks = (subject) => {
    if (subject === 'Any') {
      setBooks(allBooks)
    } else {
      let filtBySubject = allBooks.filter(book => {
        let combinedSubjects = book.subjects.join(' ')
        return combinedSubjects.includes(subject)

      })
      setBooks(filtBySubject)
    }
  }

  const saveBook = (savedBook) => {
    const isSaved = savedBooks.find(foundBook => foundBook.id === savedBook.id)
    if (!isSaved) {
      setSaved([...savedBooks, savedBook])

    }

  }

  return (
    <div className="App">
      <header className="header">
        <h1>GÜT  BOOKS</h1>
        < Navbar />
      </header>
      <main className="shelf-display">
        <Switch >
          <Route exact path='/' render={() =>
            <MainShelf bookDrop={allBooks} filterBooks={filterBooks} />} />

          <Route path="/saved" render={() => {
            <SaveShelf savedBooks={savedBooks} filterBooks={filterBooks} />
          }} />
          <Route path='/:id' render={({ match }) => {
            let bookToRender = allBooks.find(book => book.id === match.params.id)
            return <BookDetails {...bookToRender} bookId={match.params.id} saveBook={saveBook} />
          }} />
        </Switch>

      </main>
    </div>
  )

}


export default App;

