import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    return (
        <nav className="nav-bar">
            <NavLink activeClassName="active" className="nav-link" to='/' exact>
                <p className='all-books'>ALL BOOKS</p>
            </NavLink>

            <NavLink activeClassName="active" className="nav-link" to='/saved' exact>
                <p className='my-shelf'>MY SHELF</p>
            </NavLink>
        </nav>
    )
}

export default Navbar;

