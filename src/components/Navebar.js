import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { useNavigate } from "react-router";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

  const LOGOUT = () => {
    localStorage.removeItem('auth');
    setAuth({ user: null });
    navigate('/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='relative'>
      <div className='navbar flex justify-between items-center py-4 px-9 bg-gray-800 text-white'>
        <div className='brand'>
          <Link to='/' className='text-2xl font-bold logo-text'>TourMitr</Link>
        </div>
        <div className='md:hidden' onClick={toggleMenu}>
          <button className='text-white focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        <div className=' hidden md:flex md:items-center'>
          
          {auth.user && <NavLink to='/rec' className='me-3 nav-link font-bold'>GET PLACES</NavLink>}
          {!auth.user && <NavLink to='/login' className='me-3 nav-link font-bold'>LOGIN</NavLink>}
          {!auth.user && <NavLink to='/register' className='me-3 nav-link font-bold'>REGISTER</NavLink>}
          {auth.user && <NavLink to='/profile' className='me-3 nav-link font-bold'>PROFILE</NavLink>}
          {auth.user && <button onClick={LOGOUT} className='me-3 nav-link font-bold'>LOGOUT</button>}
        </div>
      </div>

      <div className={`absolute top-1 right-4 w-fit py-2 mt-16 shadow-md rounded-md bg-gray-600 text-white flex-col md:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
        {auth.user && <NavLink to='/rec' className='py-2 px-9 nav-link font-bold'>GET PLACES</NavLink>}
        {!auth.user && <NavLink to='/login' className='py-2 px-9 nav-link font-bold'>LOGIN</NavLink>}
        {!auth.user && <NavLink to='/register' className='py-2 px-9 nav-link font-bold'>REGISTER</NavLink>}
        {auth.user && <NavLink to='/profile' className='py-2 px-9 nav-link font-bold'>PROFILE</NavLink>}
        {auth.user && <button onClick={LOGOUT} className='py-2 px-9 nav-link font-bold text-left'>LOGOUT</button>}
      </div>
    </div>
  );
}

export default Header;
