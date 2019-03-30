/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import GameCell from './GameCell';

class GameBlock extends Component {
  render() {
    let background = '#b9b9b9';
    let results = [];
    if (this.props.blockFinished && this.props.blockResult) {
      results = (
        <span css={{ fontSize: '120px', width: '270px', lineHeight: '270px' }}>
          {this.props.blockResult}
        </span>
      );
    } else if (this.props.blockFinished && !this.props.blockResult) {
      results = (
        <span
          css={{ fontSize: '120px', width: '270px', lineHeight: '270px' }}
        />
      );
    } else {
      results = this.props.blockState.map((cell, index) => {
        return (
          <GameCell
            key={`${this.props.blockIndex}-${index}`}
            cellIndex={index}
            blockIndex={this.props.blockIndex}
            cellValue={cell}
            activeBlock={this.props.blockActive}
          />
        );
      });
    }
    //update background if block is disabled
    if (this.props.blockActive) {
      background = 'white';
    }
    return (
      <div
        css={{
          width: '270px',
          height: '270px',
          boxShadow: '0 0 0 2px',
          display: 'inline-grid',
          gridTemplateColumns: 'auto auto auto',
          fontFamily: 'Permanent Marker, cursive',
          background: background
        }}
      >
        {results}
      </div>
    );
  }
}
export default GameBlock;
