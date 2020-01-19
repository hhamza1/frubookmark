
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState, useEffect} from 'react';
import BookmarkCard from './BookmarkCard';
import NavBar from './NavBar';
import BookmarkForm from './BookmarkForm';
import './style/css/App.css';
const imgLink = require("../assets/images/logo.jpg");




const App = () => {

  return (
    <Fragment>
      <NavBar />
      <main> 
        <img src={imgLink} alt="Frubookmark" width="100%" />
        <BookmarkForm />
        <div className="bookmark-list">
          <BookmarkCard />
        </div>
      </main>
    </Fragment>
  )
}

export default App;
