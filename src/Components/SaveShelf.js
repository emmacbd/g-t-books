import React from 'react';
import Books from '../Components/Books';
import { NavLink } from 'react-router-dom';
import BookFilter from '../Components/BookFilter';
import '../styles/MainShelf.scss';


const SaveShelf = ({ savedBooks, filterBooks }) => {
    const savedSpines = savedBooks.map(book => {
        return (
            <NavLink className="book-nav" key={book.id} id={book.id} to={`/${book.id}`}>
                <Books title={book.title.substring(0, 39)} />
            </NavLink>
        );
    });

    return (
        <section className="shelf-wrapper">
            <BookFilter filterBooks={filterBooks} />
            <section className="book-shelf">
                {savedSpines}
            </section>
        </section>
    );
}


export default SaveShelf;