import React from 'react';
import './Books.css';


const Books = ({title}) => {
    return (
        <div className="book-title">
            <h1>{title}</h1>
        </div>
    )
}


export default Books;