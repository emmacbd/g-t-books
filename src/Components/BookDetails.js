import React, { useState, useEffect } from 'react';
import { fetchSingleBook } from '../apiCalls';
import '../styles/BookDetails.css';



const BookDetails = ({ bookId, saveBook }) => {
    const [bookInfo, setBook] = useState()

    useEffect(() => {
        fetchSingleBook(`${bookId}`)
            .then(data => setBook(data))
    }, [])



    let showBook = () => {
        if (!bookInfo) {
            return <h2>BOOK DETAILS ERROR</h2>
        } else {
            return <section className="selected-book-section">
                <img className="selected-book-image" src={bookInfo.formats.image} />
                <div className="selected-book-info">
                    <h2 className="selected-title">{bookInfo.title}</h2>
                    <div className="selected-book-details">
                        <p>Author : {bookInfo.authors.name}</p>
                        <p>Text : {bookInfo.formats.html} </p>
                        <button onClick={(event) => saveBook(bookInfo)}>Add To My Shelf</button>
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