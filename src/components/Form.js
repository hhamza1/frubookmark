import React from 'react';
import TextField from '@material-ui/core/TextField';



export default function Form() {
    return(
        <div>
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bookmark Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="url"
            label="Bookmark URL"
            type="text"
            fullWidth
          />
        </div>
    );
}

