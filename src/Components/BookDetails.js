import React, { useState, useEffect } from 'react';



const BookDetails = ({ bookId, saveBook }) => {
    const [bookInfo, setBook] = useState([])

    useEffect(() => {
        fetch(`https://gutendex.com/books/${bookId}`)
            .then(response => response.json())
            .then(data => setBook(data))
    }, [])



    let showBook = () => {
        if (!bookInfo.length) {
            return <div>Error</div>
        } else {
            return <section className="selected-book-section">
                <img className="selected-book-image" src={bookInfo.formats.image/jpeg} />
                <div className="selected-book-info">
                    <h2 className="selected-title">{bookInfo.title}</h2>
                    <div className="selected-book-details">
                        <p>Author : {bookInfo.authors.name}</p>
                        <p>Text : {bookInfo.formats.text/html} </p>
                        <button onclick={saveBook}>Add To My Shelf</button>
                    </div>
                </div>
            </section>
        }
    }

    return (
        <div>
            {showBook}
        </div>
    )


}

export default BookDetails;