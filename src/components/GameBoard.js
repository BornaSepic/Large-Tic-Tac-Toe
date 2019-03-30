/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import GameBlock from './GameBlock';

class GameBoard extends Component {
  render() {
    const gameBlocksToRender = this.props.gameBlocks.map(block => {
      return (
        <GameBlock
          key={`block-${block.blockKey}`}
          movesPlayed={block.movesPlayed}
          blockIndex={block.blockKey}
          blockActive={block.blockActive}
          blockState={block.blockState}
          blockFinished={block.blockFinished}
          blockResult={block.blockResult}
        />
      );
    });
    return (
      <div
        css={{
          display: 'inline-grid',
          gridTemplateColumns: 'auto auto auto',
          boxShadow: '0 0 0 4px'
        }}
      >
        {gameBlocksToRender}
      </div>
    );
  }
}

export default GameBoard;
