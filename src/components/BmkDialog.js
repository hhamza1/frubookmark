import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Form from './Form';


export default function BmkDialog({open, handleOpen, handleClose, addBookmark}) {

return (
    <div>
      <BookmarkBorderIcon onClick={handleOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new bookmark</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the fields below to add a new bookmark
          </DialogContentText>
            <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addBookmark} color="primary">
            Add New Bookmark
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}