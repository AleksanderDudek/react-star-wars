
import React from 'react';

import '../../styles/game/game.scss';
import PlayerArea from './PlayerArea';
import GameState from './GameState';
import Starship from 'models/Starship';
import Human from 'models/Human';

import PopupDialog from './PopupDialog';

interface IProps {
    isPlayer1Turn: boolean;
    player1Card: Human | Starship | null;
    player2Card: Human | Starship | null;
    player1Score: number;
    setPlayer1Score: React.Dispatch<React.SetStateAction<number>>;
    player2Score: number;
    setPlayer2Score: React.Dispatch<React.SetStateAction<number>>;
    gameTurnsLeft: number;
    setGameTurnsLeft: React.Dispatch<React.SetStateAction<number>>;
    getRandomCard: Function;
    finishTurn: Function;
    isLoading: boolean;
    setWinner: Function;
}

function GameArea(props: IProps): JSX.Element {

const { isPlayer1Turn, getRandomCard, player1Card, player2Card, player1Score,
    player2Score, gameTurnsLeft, finishTurn, isLoading } = props;

const shouldBeActive = !!player1Card && !!player2Card;

return (
<div className='game-area'>
    <PopupDialog
        open={shouldBeActive}
        player1Card={player1Card}
        player2Card={player2Card}
        shouldBeActive={shouldBeActive}
    />
    <div className='state-container'>
        <GameState
            player1Score={player1Score}
            player2Score={player2Score}
            gameTurnsLeft={gameTurnsLeft}
            shouldBeActive={shouldBeActive}
            finishTurn={finishTurn}
        />
    </div>
    <div className='players-container'>
    <div className='players-container-one'>
        <PlayerArea
            isPlayer1={true}
            isPlayer1Turn={isPlayer1Turn}
            player1Card={player1Card}
            player2Card={player2Card}
            getRandomCard={getRandomCard}
            isLoading={isLoading}
        />
    </div>
    <div className='players-container-two'>
        <PlayerArea
            isPlayer1={false}
            isPlayer1Turn={isPlayer1Turn}
            player1Card={player1Card}
            player2Card={player2Card}
            getRandomCard={getRandomCard}
            isLoading={isLoading}
        />
    </div>
    </div>
</div>
);
}

export default GameArea;