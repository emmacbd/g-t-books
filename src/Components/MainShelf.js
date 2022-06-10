import React from 'react';
import Books from './Books';
import BookFilter from './BookFilter';
import '../styles/MainShelf.scss';


//add title conditional 

function MainShelf({ bookDrop, filterBooks }) {
    const bookSpines = bookDrop.map(book => {
        return (
            <Books key={book.id} title={book.title.substring(0, 30) + '...'} />
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