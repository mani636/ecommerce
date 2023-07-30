import './Header.css';
import { CgHeart } from 'react-icons/cg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import { GrSearch } from 'react-icons/gr';
import { CgShoppingCart } from 'react-icons/cg';
import { SiTaichilang } from 'react-icons/si';

export const Header = () => {
  const [showHamburger, setShowHamburger] = useState(true);
  const getActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'white' : '' };
  };

  return (
    <nav>
      <div className='nav-logo-home-button'>
        <NavLink style={getActiveStyle} to='/'>
          <SiTaichilang />
          <span className='brand-name'>DadSneakers</span>
        </NavLink>
      </div>

      <div className='nav-input-search'>
        <input placeholder='Search' />
        <button>
          <GrSearch />
        </button>
      </div>

      <div
        className={
          !showHamburger
            ? 'nav-link-container-mobile nav-link-container'
            : 'nav-link-container'
        }
      >
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to='/productlist'
        >
          Explore
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to='/login'
        >
          Login
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to='wishlist'
        >
          <span>{!showHamburger ? 'Wishlist' : ''}</span>
          <CgHeart size={25} className='wishlist' />
        </NavLink>
        <NavLink
          onClick={() => setShowHamburger(true)}
          style={getActiveStyle}
          to='/cart'
        >
          <span>{!showHamburger ? 'Cart' : ''}</span>
          <CgShoppingCart size={25} className='cart' />{' '}
        </NavLink>
      </div>
      {showHamburger && (
        <div className='hamburger-icon' onClick={() => setShowHamburger(false)}>
          <RxHamburgerMenu size={20} />
        </div>
      )}
      {!showHamburger && (
        <div
          className='cross-tab-icon cross-tab-icon-mobile'
          onClick={() => setShowHamburger(true)}
        >
          <RxCross2 color={'rgb(106, 106, 65)'} size={25} />
        </div>
      )}
    </nav>
  );
};
