import React, { useState, useEffect } from 'react';
import { mockedHuman1, mockedStarship1 } from '../../service/mockData';

import '../../styles/game/game.scss';

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
import { getRandomHuman, getRandomStarship } from '../../service/httpClient';
import Starship from 'models/Starship';
import Human from 'models/Human';
import GameArea from './GameArea';

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

function Game(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [player1Card, setPlayer1Card] = useState<Starship | Human>();
  const [player2Card, setPlayer2Card] = useState<Starship | Human>();

  getRandomHuman().then((json) => {
    setPlayer1Card(mockedHuman1);
    setPlayer2Card(mockedHuman1);
    console.log(json);
    console.log(player1Card);
  });
  // getRandomStarship().then((json: Starship) => console.log(json));
  // getRandomHuman().then((json) => console.log(json));
  // getRandomStarship().then((json) => console.log(json));
  
  useEffect(() => {
    setPlayer1Card(mockedHuman1);
    setPlayer2Card(mockedHuman1);
  
    console.log(player1Card);
    console.log(player2Card);
  }, []);

  const handleClick = () => {
    console.log(player1Card);
    console.log(player2Card);
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
            <ListItem button key={'another-game'}>
              <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
              <ListItemText primary={'Another game'} />
            </ListItem>
            <ListItem button key={'reset-game'}>
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
        Game component will be here
        <button onClick={handleClick}/>
        <GameArea />
      </main>
    </div>
  );
}

export default Game;