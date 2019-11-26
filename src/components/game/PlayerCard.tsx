import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Starship from '../../models/Starship';
import Character, { isCharacter } from '../../models/Character';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 125
  }
});

interface IProps {
  isPlayer1: boolean;
  player1Card: Character | Starship | null;
  player2Card: Character | Starship | null;
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
      return <>{ isCharacter(player1Card) ? <span>Mass: {player1Card.mass}</span>  : <span>Crew: {player1Card.crew}</span> }</>;
    } else {
      return <>{ isCharacter(player2Card) ? <span>Mass: {player2Card.mass}</span>  : <span>Crew: {player2Card.crew}</span> }</>;
    }
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          style={{height: '125px'}}
          image={ props.isPlayer1 ? ('../../../assets/player1_1000_500.jpg') : '../../../assets/player2_1000_500.jpg'}
        /> */}
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