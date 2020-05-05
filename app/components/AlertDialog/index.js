import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({close, open, btnLabel1, btnLabel2, description, title, handleLabel1, handleLabel2}) {
    
  return (
      <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLabel2} color="primary">
            {btnLabel2}
          </Button>
          <Button onClick={handleLabel1} color="primary" autoFocus>
            {btnLabel1}
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}