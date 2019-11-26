
import React, { useState } from 'react';

import '../../styles/welcome/welcome.scss';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Welcome(props: any): JSX.Element {

const [open, setOpen] = useState(true);

const handleClose = () => {
  setOpen(false);
};

const handleStarships = () => {
    props.history.push({
      pathname: '/game',
      state: { isStarship: true }
    });
};

const handleCharacters = () => {
    props.history.push({
      pathname: '/game',
      state: { isStarship: false }
    });
};

return (
  <div>
    <div className='background-container'>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png' alt='' />
        <div className='stars'></div>
        <div className='twinkling'></div>
        <div className='clouds'></div>
    </div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Welcome to Star Wars App!'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          This is a 2-player game in which you randomly pick a card.
          When 2 players select a card their fighting stats are compared
          and the better card scores a point.

          Do you want to play with STARSHIPS or HUMANS deck?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleStarships} color='primary'>
            STARSHIPS
        </Button>
        <Button onClick={handleCharacters} color='primary' autoFocus>
            HUMANS
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
}

export default Welcome;