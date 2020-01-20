/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './style/css/NavBar.css';

const NavBar = ({user, signIn, signOut}) => {
    return (
      <Fragment>
          <nav className="navbar">
          <a onClick={user ? signOut : signIn} className="navbar__lnk" href="#" alt="Login">
            {
              user ? (
                <h4>Sign Out</h4>
              ) : 
              (
                <h4> Sign In</h4>
              )
            }
          </a>
          <a onClick={e => e.preventDefault()}
             className="navbar__lnk" 
             href="#" 
             alt="Bookmark">
          <span className="navbar__title">Welcome</span>
          </a>
          <BookmarkIcon />
        </nav>
      </Fragment>
    );
}

export default NavBar;