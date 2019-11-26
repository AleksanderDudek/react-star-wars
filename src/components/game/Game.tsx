import React, { useState, useEffect, FC } from 'react';

import '../../styles/game/game.scss';

import { getRandomId } from '../../utils/utils';

import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

//promise return error, not yet solved
// import { getRandomCharacter, getRandomStarship } from '../../service/httpClient';

import Starship from '../../models/Starship';
import Character, {isCharacter} from '../../models/Character';
import GameArea from './GameArea';
import EndGameDialog from './EndGameDialog';

const swapiUris = {
  starShips: 'https://swapi.co/api/starships/',
  characters: 'https://swapi.co/api/people/'
};

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
);

// interface IProps {
//   isStarship: boolean;
// }

function Game(props: any): JSX.Element {

  const isStarship = props.location.state.isStarship;

  const shouldBeActive = !!player1Card && !!player2Card;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [player1Card, setPlayer1Card] = useState<Starship | Character | null>(null);
  const [player2Card, setPlayer2Card] = useState<Starship | Character | null>(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameTurnsLeft, setGameTurnsLeft] = useState(3);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!!player1Card && !!player2Card) {
      whoWins();
    }
  }, [player1Card, player2Card]);

  useEffect(() => {
    if (gameTurnsLeft === 0) {
      setIsGameFinished(true);
    }
  }, [gameTurnsLeft]);

  const whoWins = () => {
    if (isCharacter(player1Card)) {
      if (player1Card.mass > player2Card.mass) {
        setPlayer1Score(player1Score + 1);
      } else if ((player1Card.mass < player2Card.mass)) {
        setPlayer2Score(player2Score + 1);
      } else {
        //tie
      }
    } else {
      if (player1Card.crew > player2Card.crew) {
        setPlayer1Score(player1Score + 1);
      } else if ((player1Card.crew < player2Card.crew)) {
        setPlayer2Score(player2Score + 1);
      } else {
        //tie
      }
    }
  };

  const resetGame = () => {
    setOpen(false);
    setPlayer1Card(null);
    setPlayer2Card(null);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameTurnsLeft(3);
    setIsPlayer1Turn(true);
    setIsGameFinished(false);
    setIsLoading(false);
  };

  const anotherGame = () => {
    resetGame();
    props.history.push('/');
  };

  const getRandomCard = (isPlayer1: boolean) => {
    setIsLoading(true);
    const url = isStarship ? swapiUris.starShips : swapiUris.characters;
    const id = getRandomId();

    //something strange happens from time to time to this SWAPI
    //data sometimes do not find object with given id
    // fetch(url + id + '/').then(resp => resp.json()).then( data => {
      fetch(url).then(resp => resp.json()).then( data => {

      // const card = data;
      const card = data.results[id];

      if (isPlayer1) {
        setPlayer1Card(card);
        setIsPlayer1Turn(false);
      } else {
        setPlayer2Card(card);
        setIsPlayer1Turn(true);
      }
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  };

  const finishTurn = () => {
    if ( gameTurnsLeft === 0 ) return;
    const nextTurn = gameTurnsLeft - 1;
    setGameTurnsLeft(nextTurn);
    setPlayer1Card(null);
    setPlayer2Card(null);
  };

  const setWinner = (card1Value: string, card2Value: string) => {
    if (card1Value > card2Value) {
        setPlayer2Score(player2Score + 1);
        return <span> PLAYER 2 WINS </span>;
    } else if (card1Value < card2Value) {
        setPlayer1Score(player1Score + 1);
        return <span> PLAYER 1 WINS </span>;
    } else {
        return <span> IT IS A TIE </span>;
    }
}

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
              Game options
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'another-game'} onClick={() => anotherGame()}>
              <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
              <ListItemText primary={'Another game'} />
            </ListItem>
            <ListItem button key={'reset-game'} onClick={() => resetGame()}>
              <ListItemIcon>{<RotateLeftIcon />}</ListItemIcon>
              <ListItemText primary={'Reset game'} />
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <EndGameDialog
          open={isGameFinished}
          score1={player1Score}
          score2={player2Score}
        />
        <GameArea
          isPlayer1Turn={isPlayer1Turn}
          player1Card={player1Card}
          player2Card={player2Card}
          player1Score={player1Score}
          player2Score={player2Score}
          gameTurnsLeft={gameTurnsLeft}
          getRandomCard={getRandomCard}
          finishTurn={finishTurn}
          isLoading={isLoading}
          setWinner={setWinner}
        />
      </main>
    </div>
  );
}

export default Game;