
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState} from 'react';
import BookmarkCard from './BookmarkCard';
import NavBar from './NavBar';
import BookmarkForm from './BookmarkForm';
import './style/css/App.css';


const imgLink = require("../assets/images/logo.jpg");


const App = () => {
  const[bmkData, setBmkData] = useState([{name: 'Hooks Intro', url : 'https://reactjs.org/docs/hooks-intro.html'}]);
  const [newBmk, setNewBmk] = useState({name: '', url :''});
  const dispatchCardSet = (payload) => {
    let oldArray = bmkData;
    let newArray = [...oldArray, payload];
    setBmkData(newArray);
    setNewBmk({name:'', url: ''});
  }

  return (
    <Fragment>
      <NavBar />
      <main> 
        <img src={imgLink} alt="Frubookmark" width="100%" />
        <BookmarkForm newBmk={newBmk} dispatchCardSet={dispatchCardSet} setNewBmk={setNewBmk} />
        <div className="bookmark-list">
          <BookmarkCard bookmarks={bmkData}/>
        </div>
      </main>
    </Fragment>
  )
}

export default App;
