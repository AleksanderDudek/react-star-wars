//this is the thing that will contain single player card, manage turns

import React, { useState } from 'react';
import PlayerCard from './PlayerCard';

import '../../styles/game/game.scss';

function PlayerArea(props: any): JSX.Element {

return (
<div>
    <PlayerCard />
</div>
);
}

export default PlayerArea;