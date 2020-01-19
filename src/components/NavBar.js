/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
    return (
        <nav className="navbar">
        <a className="navbar__lnk" href="#" alt="Login">
          <AccountCircleIcon />
        </a>
        <a className="navbar__lnk" href="#" alt="Bookmark">
          <BookmarkIcon />
        </a>
        <a className="navbar__lnk" href="#" alt="Search">
          <SearchIcon />
        </a>
      </nav>
    );
}

export default NavBar;