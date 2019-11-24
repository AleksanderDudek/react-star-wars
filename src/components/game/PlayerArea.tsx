//this is the thing that will contain single player card, manage turns by clicking

import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import Starship from 'models/Starship';
import Human from 'models/Human';
import Progress from '../../utils/Progress';

import '../../styles/game/game.scss';

interface IProps {
    isPlayer1: boolean;
    isPlayer1Turn: boolean;
    player1Card: Human | Starship | null;
    player2Card: Human | Starship | null;
    getRandomCard: Function;
    isLoading: boolean;
}

function PlayerArea(props: IProps): JSX.Element {

const { isPlayer1Turn, isPlayer1, player1Card, player2Card, getRandomCard, isLoading } = props;

const bothCardsLoaded = !!player1Card && !!player2Card;

const shouldBeDisabled = (isPlayer1Turn && !isPlayer1 || !isPlayer1Turn && isPlayer1) && !bothCardsLoaded;

const shouldDisplayCard = isPlayer1 && player1Card || !isPlayer1 && player2Card;

return (
    <div className={ shouldBeDisabled ? 'players-container-disabled' : '' }>
    {
        isLoading
            ? <div>
                <Progress />
            </div>
            : <div>
                {
                !shouldDisplayCard ?
                    <div>
                        <h2>{ isPlayer1 ? 'Player 1' : 'Player 2'}</h2>
                        <button onClick={() => getRandomCard(isPlayer1)}>Get card!</button>
                    </div>
                    :
                    <PlayerCard
                        isPlayer1={props.isPlayer1}
                        player1Card={props.player1Card}
                        player2Card={props.player2Card}
                    />
                }
            </div>
    }
    </div>
);
}

export default PlayerArea;