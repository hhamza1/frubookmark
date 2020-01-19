/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style/css/NavBar.css';

const NavBar = () => {

    return (
      <Fragment>
          <nav className="navbar">
          <a className="navbar__lnk" href="#" alt="Login">
            <AccountCircleIcon />
          </a>
          <a className="navbar__lnk" href="#" alt="Bookmark">
            <BookmarkIcon />
          </a>
        </nav>
      </Fragment>
    );
}

export default NavBar;