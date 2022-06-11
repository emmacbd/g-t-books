import React from 'react';
import loadingBook from './assets/loadingBook.gif';
import './Loading.css';

const Loading = () => {
    return (
        <img src={loadingBook}
            className='loading'
            alt='Loading'
        />
    )
}

export default Loading