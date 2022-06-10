import React from 'react';
import '../styles/Books.css';


const Books = ({ title }) => {
    return (
        <div className="book">
            <h3>{title}</h3>
        </div>
    )
}


export default Books;