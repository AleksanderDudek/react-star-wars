// this will contain score and number of turns left

import React from 'react';

import '../../styles/game/game.scss';

import Button from '../../utils/Button';
import { Chip } from '@material-ui/core';

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
            <div className={'element'}>
            <Chip
                label={'GAME STATE'}
                color='secondary'
            />
            </div>
            <div className={'element'}>
                <Chip
                    label={'PLAYER1'}
                    color='primary'
                />
                <Chip
                    label={player1Score}
                    color='secondary'
                />
                <Chip
                    label={':'}
                    color='primary'
                />
                <Chip
                    label={player2Score}
                    color='secondary'
                />
                <Chip
                    label={'PLAYER2'}
                    color='primary'
                />
            </div>
            <div className={'element'}>
                <Chip
                    label={'GAME TURNS LEFT'}
                    color='secondary'
                />
                <Chip
                    label={gameTurnsLeft}
                    color='primary'
                />
            </div>
        </div>

        <div className={'button-area'}>
            <Button
                id='next-turn'
                disabled={ !shouldBeActive }
                onClick={ finishTurn }
                text={'NEXT TURN'}
            />
            <Button
                id='finish-game'
                disabled={ !shouldFinishGame }
                onClick={ finishGame }
                text={'FINISH GAME'}
            />
        </div>
    </div>
    );
}

export default GameState;