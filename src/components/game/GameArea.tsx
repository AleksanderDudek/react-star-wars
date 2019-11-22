
import React, { useState } from 'react';

import '../../styles/game/game.scss';
import PlayerArea from './PlayerArea';
import GameState from './GameState';

function GameArea(props: any): JSX.Element {

return (
<div className='game-area'>
    <p>GAME AREA</p>
    <div className='state-container'>
        <GameState />
    </div>
    <div className='players-container'>
    <div className='players-container-one'>
        <PlayerArea />
    </div>
    <div className='players-container-two'>
        <PlayerArea />
    </div>
    </div>
</div>
);
}

export default GameArea;