import React, { useState, useEffect } from 'react';
import { fetchSingleBook } from '../../apiCalls';
import PropTypes from 'prop-types';
import ErrorBook from '../ErrorBook/ErrorBook';
import './BookDetails.css';



const BookDetails = ({ bookId, saveBook, savedBooks, removeBook }) => {
    const [bookInfo, setBook] = useState()

    useEffect(() => {
        fetchSingleBook(bookId)
            .then(data => setBook(data))

    }, [])

    const isSaved = () => {
        if (savedBooks.includes(bookInfo)) {
            return true
        }
    }

    let showBook = () => {
        if (!bookInfo) {
            return <ErrorBook/>
        } else {
            return <section className="selected-book-section">
                <img className="selected-book-image" src={bookInfo.formats.jpeg} />
                <div className="selected-book-info">
                    <h2 className="selected-title">{bookInfo.title.substring(0, 50)}</h2>
                    <div className="selected-book-details">
                        <p>Author : {bookInfo.authors[0].name.split(',').reverse().join(' ')}</p>
                        <p>Text : {Object.keys(bookInfo.formats).split(',')} </p>
                        {isSaved ? <button onClick={() => saveBook(bookInfo)}>Add To My Shelf</button> : ' '}
                    </div>
                </div>
            </section>
        }
    }

    return (
        <>
            {showBook()}
        </>
    )
}

export default BookDetails;


BookDetails.propTypes = {
    bookId: PropTypes.number.isRequired,
    saveBook: PropTypes.func.isRequired,
    savedBooks: PropTypes.arrayOf(PropTypes.object)
}