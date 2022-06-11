import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchBooks } from '../../apiCalls';
import MainShelf from '../MainShelf/MainShelf';
import SaveShelf from '../SaveShelf/SaveShelf';
import BookDetails from '../BookDetails/BookDetails';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Loading from '../Loading/Loading';
import './App.css';



const App = () => {
  const [allBooks, setBooks] = useState([])
  const [savedBooks, setSaved] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetchBooks.getBookData()
      .then(data => setBooks(data.results))
      .catch(error => setError(error.message))
  }, [])


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

  const saveBook = (book) => {

    if (!savedBooks.includes(book)) {
      setSaved([...savedBooks, book])
    }

  }

  const removeBook = (id) => {
    const updatedBooks = allBooks.filter(book => book.id != id);

    savedBooks(updatedBooks);

  }

  return (
    <>
      <div className="App">
        <Header />
        < Navbar />
        <Switch >
          <Route exact path='/'>
            {allBooks ? <MainShelf bookDrop={allBooks} filterBooks={filterBooks} /> : <Loading />}
          </Route>

          <Route exact path='/saved'>
            <SaveShelf savedBooks={savedBooks} filterBooks={filterBooks} />
          </Route>


          <Route path='/:id' render={({ match }) => {
            let bookToRender = allBooks.find(book => book.id === match.params.id)
            return <BookDetails {...bookToRender} bookId={match.params.id} saveBook={saveBook} savedBooks={savedBooks} removeBook={removeBook} />
          }} />
        </Switch>
      </div>
    </>
  )

}


export default App;

