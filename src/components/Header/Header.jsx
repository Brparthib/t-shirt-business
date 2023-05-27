import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header bg-slate-700 text-center py-4'>
            <Link className='mx-2' to='/'>Home</Link>
            <Link className='mx-2' to='/orders'>Orders</Link>
            <Link className='mx-2' to='/grandpa'>Grandpa</Link>
            <Link className='mx-2' to='/about'>About</Link>
        </nav>
    );
};

export default Header;