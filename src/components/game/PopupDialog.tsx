import React, { useState, useEffect } from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Starship from '../../models/Starship';
import Human, { isHuman } from '../../models/Human';

interface IProps {
  open: boolean;
  player1Card: Human | Starship | null;
  player2Card: Human | Starship | null;
  shouldBeActive: boolean;
}

function PopupDialog(props: IProps) {
  const { open, player1Card, player2Card, shouldBeActive } = props;

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
      setOpenDialog(open);
  }, [open]);

  function renderBody () {
    if (isHuman(player1Card)) {
        return whoWins(player1Card.mass, player2Card.mass);
    } else {
        return whoWins(player1Card.crew, player2Card.crew);
    }
  }

  function handleClose () {
    setOpenDialog(false);
  }

  function whoWins (card1Value: string, card2Value: string) {
        if (card1Value > card2Value) {
            return <span> PLAYER 1 WINS </span>;
        } else if (card1Value < card2Value) {
            return <span> PLAYER 2 WINS </span>;
        } else {
            return <span> IT IS A TIE </span>;
        }
  }

  return (
    <Dialog aria-labelledby='simple-dialog-title' open={openDialog} onClose={handleClose}>
      <DialogTitle id='simple-dialog-title'>TURN RESULT</DialogTitle>
      <div>
        { shouldBeActive ? renderBody() : null }
      </div>
    </Dialog>
  );
}

export default PopupDialog;
