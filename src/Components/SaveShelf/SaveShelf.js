import React from 'react';
import Books from '../Books/Books';
import { NavLink } from 'react-router-dom';
import BookFilter from '../BookFilter/BookFilter';
import './SaveShelf.scss';


const SaveShelf = ({ savedBooks, filterBooks }) => {
    console.log('Where me saved books', savedBooks)
    let savedSpines = savedBooks.map(book => {
        return (
            <NavLink className="book-nav" key={book.id} id={book.id} to={`/${book.id}`}>
                <Books title={book.title.substring(0, 39)} />
            </NavLink>
        );
    });

    return (
        <section className="shelf-wrapper">
            <BookFilter filterBooks={filterBooks} />
            <section className="save-shelf">
                {savedSpines}
            </section>
        </section>
    );
}


export default SaveShelf;