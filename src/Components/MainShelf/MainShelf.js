import React from 'react';
import Books from '../Books/Books';
import BookFilter from '../BookFilter/BookFilter';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './MainShelf.scss';


//add title conditional 

const MainShelf = ({ bookDrop, filterBooks }) => {
    console.log('made it to main', bookDrop)
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
                {bookSpines}
            </section>
        </section>
    )
}


export default MainShelf;

MainShelf.propTypes = {
    bookdrop: PropTypes.arrayOf(PropTypes.object),
    filterBooks: PropTypes.func.isRequired
}