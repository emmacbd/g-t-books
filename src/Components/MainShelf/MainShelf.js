import React from 'react';
import Books from '../Books/Books';
import BookFilter from '../BookFilter/BookFilter';
import PropTypes from 'prop-types';
import ErrorBook from '../ErrorBook/ErrorBook';
import { NavLink } from 'react-router-dom';
import './MainShelf.scss';



const MainShelf = ({ bookDrop, filterBooks }) => {
        const bookSpines = bookDrop.map(book => {
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
                {bookDrop.length ?  bookSpines : <ErrorBook />}
                </section>
            </section>
        )
    }


export default MainShelf;

MainShelf.propTypes = {
    bookdrop: PropTypes.arrayOf(PropTypes.object),
    filterBooks: PropTypes.func.isRequired
}