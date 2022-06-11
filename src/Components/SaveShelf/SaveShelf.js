import React from 'react';
import Books from '../Books/Books';
import { NavLink } from 'react-router-dom';
import BookFilter from '../BookFilter/BookFilter';
import EmptyShelf from '../EmptyShelf/EmptyShelf';
import '../EmptyShelf/EmptyShelf.scss';
import './SaveShelf.scss';


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
            <section className="save-shelf">
                {savedSpines.length === 0 ?
                    <EmptyShelf />
                    : savedSpines}
            </section>
        </section>
    );
}



export default SaveShelf;