import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import './style/css/Header.css';
import BmkDialog from './BmkDialog';


const Header = ({open, handleOpen, handleClose, addBookmark}) => {
    return(
        <div className="header">
            <div className="header__left">
                <AccountCircleIcon />
            </div>
            <div className="header__right">
                <BmkDialog 
                    open={open} 
                    handleClose={handleClose} 
                    handleOpen={handleOpen} 
                    addBookmark={addBookmark} 
                    className="header__pd-right"/>
                <SearchIcon  />
            </div>
        </div>
    );
}

export default Header;