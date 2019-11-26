//this will contain score and number of turns left

import React from 'react';

import '../../styles/game/game.scss';

interface IProps {
    player1Score: number;
    player2Score: number;
    gameTurnsLeft: number;
    finishTurn: Function;
    finishGame: Function;
    shouldBeActive: boolean;
    shouldFinishGame: boolean;
}

function GameState(props: IProps): JSX.Element {

const { player1Score, player2Score, gameTurnsLeft, finishTurn, shouldBeActive, finishGame, shouldFinishGame} = props;

return (
    <div className={'score-board'}>
        <div>
            <span> GAME STATE </span>
            <br />
            <span> PLAYER1 { player1Score } : { player2Score } PLAYER2</span>
            <br />
            <span> GAME TURNS LEFT: { gameTurnsLeft } </span>
            </div>
        <div>
            <button id='next-turn' disabled={ !shouldBeActive } onClick={ () => finishTurn() }>NEXT TURN</button>
        </div>
        <div>
            <button id='finish-game' disabled={ !shouldFinishGame } onClick={ () => finishGame() }>FINISH GAME</button>
        </div>
    </div>
    );
}

export default GameState;