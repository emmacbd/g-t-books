import React from 'react';
import Books from '../Books/Books';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import EmptyShelf from '../EmptyShelf/EmptyShelf';
import '../EmptyShelf/EmptyShelf.scss';
import './SaveShelf.scss';


const SaveShelf = ({ savedBooks}) => {
    const savedSpines = savedBooks.map(book => {
        return (
            <NavLink className="book-nav" key={Date.now()} id={book.id} to={`/${book.id}`}>
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

