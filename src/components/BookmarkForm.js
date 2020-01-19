import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const BookmarkForm = ({setNewBmk, newBmk, dispatchCardSet}) => {
    return(
        <form onSubmit={e => e.preventDefault()}>
          <h3 className="formTitle">Frubookmark - Add a bookmark</h3>
            <div className="form-field">
              <TextField
                value={newBmk.name}
                onChange={e => setNewBmk({...newBmk, name: e.currentTarget.value})}
                name="bookmark-name" 
                label="Bookmark Name" 
                placeholder="Enter the name here!" 
                fullWidth/> 
            </div>
            <div className="form-field">
              <TextField
                value={newBmk.url}
                onChange={e => setNewBmk({...newBmk, url: e.currentTarget.value})}
                name="bookmark-url" 
                label="Bookmark URL" 
                placeholder="https://example.com" 
                fullWidth/> 
            </div>
            <div className="form-actions">
              <Button variant="outlined" color="secondary">
                Clear Fields
              </Button>
              <Button onClick={() => dispatchCardSet(newBmk)} variant="outlined" color="primary">
                Add Bookmark
              </Button>
            </div>
        </form>
    );
}

export default BookmarkForm;