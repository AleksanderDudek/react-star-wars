import { mount } from 'enzyme';
import * as React from 'react';

import { initialGameMock, mockedCharacter1, mockedStarship1 } from '../src/service/mockData';

import PlayerArea from '../src/components/game/PlayerArea';
import GameState from '../src/components/game/GameState';
// import { Button } from '@material-ui/core';

describe('Game component ', () => {
    const functionPlaceholder = jest.fn();

    it('should have only Player1\'s button accessible or active when game is started', () => {

      const player1Area = mount(
      <PlayerArea
            isPlayer1={initialGameMock.isPlayer1}
            isPlayer1Turn={initialGameMock.isPlayer1Turn}
            isLoading={initialGameMock.isLoading}
            player1Card={initialGameMock.player1Card}
            player2Card={initialGameMock.player2Card}
            getRandomCard={functionPlaceholder}
        />);

      const player2Area = mount(
      <PlayerArea
        isPlayer1={!initialGameMock.isPlayer1}
        isPlayer1Turn={initialGameMock.isPlayer1Turn}
        isLoading={initialGameMock.isLoading}
        player1Card={initialGameMock.player1Card}
        player2Card={initialGameMock.player2Card}
        getRandomCard={functionPlaceholder}
      />);

      const gameState = mount(
      <GameState
        player1Score={initialGameMock.player1Score}
        player2Score={initialGameMock.player2Score}
        finishGame={functionPlaceholder}
        finishTurn={functionPlaceholder}
        shouldBeActive={false}
        shouldFinishGame={initialGameMock.shouldFinishGame}
        gameTurnsLeft={initialGameMock.gameTurnsLeft}
      />);

      expect(player1Area.childAt(0).hasClass('')).toBeTruthy();
      expect(player2Area.childAt(0).hasClass('players-container-disabled')).toBeTruthy();

      gameState.find('button').forEach( button => {
        expect(button.prop('disabled')).toBeTruthy();
      });
   });

   it('should have only Player2\'s button accessible or active when it is his turn', () => {

    const player1Area = mount(
    <PlayerArea
          isPlayer1={initialGameMock.isPlayer1}
          isPlayer1Turn={!initialGameMock.isPlayer1Turn}
          isLoading={initialGameMock.isLoading}
          player1Card={mockedCharacter1}
          player2Card={initialGameMock.player2Card}
          getRandomCard={functionPlaceholder}
      />);

    const player2Area = mount(
    <PlayerArea
      isPlayer1={!initialGameMock.isPlayer1}
      isPlayer1Turn={!initialGameMock.isPlayer1Turn}
      isLoading={initialGameMock.isLoading}
      player1Card={mockedCharacter1}
      player2Card={initialGameMock.player2Card}
      getRandomCard={functionPlaceholder}
    />);

    const gameState = mount(
    <GameState
      player1Score={initialGameMock.player1Score}
      player2Score={initialGameMock.player2Score}
      finishGame={functionPlaceholder}
      finishTurn={functionPlaceholder}
      shouldBeActive={false}
      shouldFinishGame={initialGameMock.shouldFinishGame}
      gameTurnsLeft={initialGameMock.gameTurnsLeft}
    />);

    expect(player1Area.childAt(0).hasClass('players-container-disabled')).toBeTruthy();
    expect(player2Area.childAt(0).hasClass('')).toBeTruthy();

    gameState.find('button').forEach( button => {
      expect(button.prop('disabled')).toBeTruthy();
    });
 });

 it('should have NEXT TURN button active when both players selected cards', () => {

    const shouldEnableTurnButton = !!mockedCharacter1 && !!mockedCharacter1;

    const gameState = mount(
    <GameState
      player1Score={initialGameMock.player1Score}
      player2Score={initialGameMock.player2Score}
      finishGame={functionPlaceholder}
      finishTurn={functionPlaceholder}
      shouldBeActive={shouldEnableTurnButton}
      shouldFinishGame={initialGameMock.shouldFinishGame}
      gameTurnsLeft={initialGameMock.gameTurnsLeft}
    />);

    expect(gameState.find('button#next-turn').prop('disabled')).toBeFalsy();
 });

 it('should have only FINISH GAME button active when both players selected cards', () => {

    const gameTurnsLeft = 1;
    const shouldFinishGame = !!mockedCharacter1 && !!mockedCharacter1 && gameTurnsLeft === 1;
    const shouldBeActive = !!mockedCharacter1 && !!mockedCharacter1 && gameTurnsLeft > 1;

    const gameState = mount(
    <GameState
      player1Score={initialGameMock.player1Score}
      player2Score={initialGameMock.player2Score}
      finishGame={functionPlaceholder}
      finishTurn={functionPlaceholder}
      shouldBeActive={shouldBeActive}
      shouldFinishGame={shouldFinishGame}
      gameTurnsLeft={1}
    />);

    expect(gameState.find('button#next-turn').prop('disabled')).toBeTruthy();
    expect(gameState.find('button#finish-game').prop('disabled')).toBeFalsy();

 });

});
