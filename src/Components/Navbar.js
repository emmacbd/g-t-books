import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';



const Navbar = () => {
    return (
        <nav className="nav-bar">
            <NavLink className="nav-link" to="/">
                <p className='all-books'>All Books</p>
            </NavLink>

            <NavLink className="nav-link" to="/my-shelf">
                <p className='my-shelf'>My Shelf</p>
            </NavLink>
        </nav>
    )
}

export default Navbar;

