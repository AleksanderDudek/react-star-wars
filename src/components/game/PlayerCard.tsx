import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Starship from '../../models/Starship';
import Human, { isHuman } from '../../models/Human';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface IProps {
  isPlayer1: boolean;
  player1Card: Human | Starship | null;
  player2Card: Human | Starship | null;
}

function PlayerCard(props: IProps): JSX.Element {
  const classes = useStyles();
  const { isPlayer1, player1Card, player2Card } = props;

  function renderTitle () {
    if (isPlayer1) {
      return <div>{player1Card.name}</div>;
    } else {
      return <div>{player2Card.name}</div>;
    }
  }

  function renderBody () {
    if (isPlayer1) {
      return <div>{ isHuman(player1Card) ? <span>Mass: {player1Card.mass}</span>  : <span>Crew: {player1Card.crew}</span> }</div>;
    } else {
      return <div>{ isHuman(player2Card) ? <span>Mass: {player2Card.mass}</span>  : <span>Crew: {player2Card.crew}</span> }</div>;
    }
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ props.isPlayer1 ? '../../../assets/player1_1000_500.jpg' : '../../../assets/player2_1000_500.jpg'}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h4'>
            {renderTitle()}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
          {renderBody()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PlayerCard;