import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchIcon from '@material-ui/icons/Search';
import './style/css/Header.css';


const Header = () => {
    return(
        <div className="header">
            <div className="header__left">
                <AccountCircleIcon />
            </div>
            <div className="header__right">
                <BookmarkBorderIcon className="header__pd-right"/>
                <SearchIcon  />
            </div>
        </div>
    );
}

export default Header;