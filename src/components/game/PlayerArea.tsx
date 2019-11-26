// this is the thing that will contain single player card, manage turns by clicking

import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import Starship from 'models/Starship';
import Character from 'models/Character';
import Progress from '../../utils/Progress';
import Button from '../../utils/Button';

import '../../styles/game/game.scss';
import { Chip } from '@material-ui/core';

interface IProps {
    isPlayer1: boolean;
    isPlayer1Turn: boolean;
    player1Card: Character | Starship | null;
    player2Card: Character | Starship | null;
    getRandomCard: Function;
    isLoading: boolean;
}

function PlayerArea(props: IProps): JSX.Element {

const { isPlayer1Turn, isPlayer1, player1Card, player2Card, getRandomCard, isLoading } = props;

const bothCardsLoaded = !!player1Card && !!player2Card;

const shouldBeDisabled = (isPlayer1Turn && !isPlayer1 || !isPlayer1Turn && isPlayer1) && !bothCardsLoaded;

const shouldDisplayCard = isPlayer1 && player1Card || !isPlayer1 && player2Card;

const shouldDisplayLoading = (isPlayer1Turn && isPlayer1 || !isPlayer1Turn && !isPlayer1) && isLoading;

return (
    <div className={ shouldBeDisabled ? 'players-container-disabled' : '' }>
    {
        shouldDisplayLoading
            ? <Progress />
            : <div>
                {
                !shouldDisplayCard ?
                    <div>
                        <Chip
                            label={isPlayer1 ? 'Player 1' : 'Player 2'}
                            color='secondary'
                        />
                        <Button
                            onClick={() => getRandomCard(isPlayer1)}
                            text={'Get card!'}
                            disabled={false}
                        />
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