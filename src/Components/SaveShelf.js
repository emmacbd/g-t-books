import React from 'react';
import Books from '../Components/Books';


function SaveShelf({ savedBooks }) {
    const savedSpines = savedBooks.map(book => {
        return (
            <Books key={book.id} title={book.title.substring(0, 39)} />
        );
    });

    return (
        <section className="saved-wrapper">
            {savedSpines}
        </section>
    );
}





export default SaveShelf;