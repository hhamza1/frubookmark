/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import GoogleLogin from 'react-google-login';
import './style/css/NavBar.css';

const responseGoogle = (response) => {
  console.log(response);
}

const NavBar = () => {
    
    return (
      <Fragment>
          <nav className="navbar">
          <a className="navbar__lnk" href="#" alt="Login">
            <GoogleLogin
              clientId={'442950820871-t9d2htq7hkmot0qljts5vvp4ra7gnkra.apps.googleusercontent.com'}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            >
            </GoogleLogin>
          </a>
          <a onClick={e => e.preventDefault()}
             className="navbar__lnk" 
             href="#" 
             alt="Bookmark">
          <span className="navbar__title">Frubookmark</span>
          </a>
          <BookmarkIcon />
        </nav>
      </Fragment>
    );
}

export default NavBar;