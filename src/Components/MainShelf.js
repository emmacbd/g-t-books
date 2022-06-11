import React from 'react';
import Books from './Books';
import BookFilter from './BookFilter';
import { NavLink } from 'react-router-dom';
import '../styles/MainShelf.scss';


//add title conditional 

const MainShelf = ({ bookDrop, filterBooks }) => {
    console.log('what is going on', bookDrop)
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
    );
}


export default MainShelf;