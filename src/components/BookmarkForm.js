import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from '../firebase';


const BookmarkForm = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    function onSubmit(e) {
      e.preventDefault();

      firebase
      .firestore()
      .collection('bookmarks')
      .add({
        name,
        url
      })
      .then(() => {
        setName('')
        setUrl('')
        })
      }
    


    return(
        <form>
          <h3 className="formTitle">Frubookmark - Add a bookmark</h3>
            <div className="form-field">
              <TextField
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                name="bookmark-name" 
                label="Bookmark Name" 
                placeholder="Enter the name here!" 
                fullWidth/> 
            </div>
            <div className="form-field">
              <TextField
                value={url}
                onChange={e => setUrl(e.currentTarget.value)}
                name="bookmark-url" 
                label="Bookmark URL" 
                placeholder="https://example.com" 
                fullWidth/> 
            </div>
            <div className="form-actions">
              <Button variant="outlined" color="secondary">
                Clear Fields
              </Button>
              <Button onClick={onSubmit} variant="outlined" color="primary">
                Add Bookmark
              </Button>
            </div>
        </form>
    );
}
export default BookmarkForm;