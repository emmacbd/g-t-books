import React from 'react';
import '../styles/BookFilter.css';


const BookFilter = ({ filterBooks }) => {
    const handleSelect = (e) => {
        filterBooks(e.target.value)
    }

    return (
        <section className="book-filter">
            <label htmlFor="book-filter-dropdown">Filter Books By Subject : </label>
            <select
                title="Filter Books By Subject"
                className="book-filter-dropdown"
                onChange={handleSelect}>

                <option value="Any">All Books</option>
                <option value="Adventure">Adventure Stories</option>
                <option value="Bildungsromans">Bildungsromans</option>
                <option value="Birds">Birds</option>
                <option value="Classical">Classical Literature</option>
                <option value="Comedies">Comedies</option>
                <option value="Didactic">Didactic Literature</option>
                <option value="Fantasy">Fantasy Literature</option>
                <option value="Feminist">Feminist Fiction</option>
                <option value="Fiction">Fiction</option>
                <option value="Horror">Horror Tales</option>
                <option value="Humor">Humor</option>
                <option value="Love">Love Stories</option>
                <option value="Marriage">Marriage</option>
                <option value="Psychological">Psychological Fiction</option>
                <option value="Revenge">Revenge</option>
                <option value="Science">Science Fiction</option>
                <option value="Supernatural">Supernatural Literature</option>
            </select>
        </section>
    )
}




export default BookFilter;