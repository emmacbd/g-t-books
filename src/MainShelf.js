import React from 'react';
import Books from './Books';
import Book from './Book';
import BookFilter from './BookFilter';

const MainShelf = ({ bookData }) => {
    const bookSpines = bookData.map(book => {
        return (
            <Book className="book-spine" key={book.id} to={`/books/${book.id}`}>
                <h2>${book.title}</h2>
            </Book>
        )
    })

    return (
        <section className="book-wrapper">
            < BookFilter />
            <section className="book-container">
                {bookSpines}
            </section>
        </section>
    )
}


export default MainShelf;