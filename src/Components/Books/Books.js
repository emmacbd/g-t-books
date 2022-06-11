import React from 'react';
import './Books.scss';


const Books = ({ title }) => {
    return (
        <div className="book">
            <h3>{title}</h3>
        </div>
    )
}


export default Books;