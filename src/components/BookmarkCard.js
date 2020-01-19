/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment, useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import firebase from '../firebase';


function useBookmark() {
  const[bmkData, setBmkData] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection('bookmarks')
      .onSnapshot((snapshot) => {
        const newBookmark = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setBmkData(newBookmark);
      });
  }, [])

  return bmkData;
}

const BookmarkCard = () => {
    const bookmarks = useBookmark();
    const mappedData = bookmarks.map((bookmark, index) => {
      if(bookmark){ 
      return(
              <Card className="bookmark" key={index}>
                <CardContent className="bookmark__content">
                  <h2>
                    Name : {bookmark.name}
                  </h2>
                  <p>
                    URL : <a href={bookmark.url} alt="Bookmarked Link">{bookmark.url}</a>
                  </p>
                </CardContent>
              </Card>
        )}
        else{
          return (
            <Fragment>
              <Card className="bookmark">
                  <CardContent className="bookmark__content">
                    <h2>
                      No bookmarks saved!
                    </h2>
                  </CardContent>
              </Card>
            </Fragment>
          )
        }
      });

  return (
    <Fragment>
      {mappedData}
    </Fragment>
  )
}
export default BookmarkCard;