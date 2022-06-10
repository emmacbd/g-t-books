import React from 'react';
import Books from './Books';
import BookFilter from './BookFilter';
import '../styles/MainShelf.scss';


//add title conditional 

function MainShelf({ bookData }) {
    const bookSpines = bookData.map(book => {
        return (
            <Books title={book.title.substring(0, 30) + '...'} />
        );
    });

    return (
        <section className="shelf-wrapper">
            <section className="book-shelf">
                {bookSpines}
            </section>
        </section>
    );
}


export default MainShelf;