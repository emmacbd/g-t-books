import React from 'react';
import '../styles/Books.css';


const Books = ({ title }) => {
    return (
        <div className="book">
            <h1>{title}</h1>
        </div>
    )
}


export default Books;