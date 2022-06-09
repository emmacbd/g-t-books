import React from 'react';
import Books from './Books';
import BookFilter from './BookFilter';
import './MainShelf.scss';

const MainShelf = ({ bookData }) => {
    const bookSpines = bookData.map(book => {
        return (
            <Books className="book-spine" key={book.id}>
                <h2>${book.title}</h2>
            </Books>
        )
    })

    return (
        <section className="shelf-wrapper">
            < BookFilter />
            <section className="book-shelf">
                {bookSpines}
            </section>
        </section>
    )
}


export default MainShelf;