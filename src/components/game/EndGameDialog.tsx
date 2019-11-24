import React, { useState, useEffect } from 'react';

import '../../styles/game/game.scss';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface IProps {
  open: boolean;
  score1: number;
  score2: number;
}

function EndGameDialog(props: IProps) {
  const { open, score1, score2 } = props;

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
      setOpenDialog(open);
  }, [open]);

  function handleClose () {
    setOpenDialog(false);
  }

  function whoWins () {
        if (score1 > score2) {
            return <span> PLAYER 1 WINS </span>;
        } else if (score1 < score2) {
            return <span> PLAYER 2 WINS </span>;
        } else {
            return <span> IT IS A TIE </span>;
        }
  }

  return (
    <Dialog aria-labelledby='simple-dialog-title' open={openDialog} onClose={handleClose}>
      <DialogTitle id='simple-dialog-title'>GAME RESULT</DialogTitle>
      <div style={{ padding: '1.5rem'}}>
        { whoWins() }
      </div>
    </Dialog>
  );
}

export default EndGameDialog;
