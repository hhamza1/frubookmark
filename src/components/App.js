
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import BookmarkCard from './BookmarkCard';
import NavBar from './NavBar';
import BookmarkForm from './BookmarkForm';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from '../firebase';
import {firebaseConfig} from '../firebase';
import './style/css/App.css';
const imgLink = require("../assets/images/logo.jpg");

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();


const providers = {
  googleProvider : new firebase.auth.GoogleAuthProvider()
};


class App extends React.Component{


  render() {
  const { user, signOut, signInWithGoogle,} = this.props;

  return (
    <Fragment>
      <NavBar signIn={signInWithGoogle} user={user} signOut={signOut}/>
      <main>
        <img src={imgLink} alt="Frubookmark" width="100%" />
            {
              user ? (
                <div>
                  <BookmarkForm />
                  <div className="bookmark-list">
                    <BookmarkCard />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 style={{textAlign : 'center'}}>You need to log in first</h2>
                </div>
              )
            }   
      </main>
    </Fragment>
  )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
  })(App);
