
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import './style/css/App.css';

const imgLink = require("../assets/images/logo.jpg");


const App = () => {
  return (
    <Fragment>
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
      <main> 
        <img src={imgLink} alt="Frubookmark" width="100%" />
        <form>
          <h2 className="formTitle">Frubookmark - Add a bookmark</h2>
            <div className="form-field">
              <TextField
                name="bookmark-name" 
                label="Bookmark Name" 
                placeholder="Enter the name here!" /> 
            </div>
            <div className="form-field">
              <TextField
                name="bookmark-url" 
                label="Bookmark URL" 
                placeholder="https://example.com" /> 
            </div>
            <div className="form-actions">
              <Button variant="outlined" color="secondary">
                Clear Fields
              </Button>
              <Button variant="outlined" color="primary">
                Add Bookmark
              </Button>
            </div>
        </form>
        <div className="bookmark-list">
          <Card className="bookmark">
            <CardContent>
              <h2>
                Bookmark Title
              </h2>
              <h2>
                <a href="#" alt="Bookmarked Link">https://example.com</a>
              </h2>
            </CardContent>
          </Card>
        </div>
      </main>
    </Fragment>
  )
}

export default App;
