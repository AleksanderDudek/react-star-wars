
import React from 'react';

import '../../styles/game/game.scss';
import PlayerArea from './PlayerArea';
import GameState from './GameState';
import Starship from 'models/Starship';
import Character from 'models/Character';

import PopupDialog from './PopupDialog';

interface IProps {
    isPlayer1Turn: boolean;
    player1Card: Character | Starship | null;
    player2Card: Character | Starship | null;
    player1Score: number;
    player2Score: number;
    gameTurnsLeft: number;
    getRandomCard: Function;
    finishTurn: Function;
    finishGame: Function;
    isLoading: boolean;
}

function GameArea(props: IProps): JSX.Element {

const { isPlayer1Turn, getRandomCard, player1Card, player2Card, player1Score,
    player2Score, gameTurnsLeft, finishTurn, isLoading, finishGame } = props;

const shouldBeActive = !!player1Card && !!player2Card && gameTurnsLeft > 1;
const shouldFinishGame = !!player1Card && !!player2Card && gameTurnsLeft === 1;


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
            finishGame={finishGame}
            shouldFinishGame={shouldFinishGame}
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