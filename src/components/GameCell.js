/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateCell,
  updateGameSign,
  checkBlock,
  updateBlocks
} from '../actions/gameActions';

class GameCell extends Component {
  getCellCord = () => {
    return {
      block: this.props.blockIndex,
      cell: this.props.cellIndex
    };
  };

  setSign = () => {
    if (this.props.cellValue) {
      return;
    }
    if (!this.props.activeBlock) {
      return;
    }
    this.props.dispatch(updateCell(this.getCellCord()));
    this.movePlayed();
  };

  movePlayed = () => {
    this.props.dispatch(updateGameSign());
    this.validateResult();
  };

  validateResult = () => {
    this.props.dispatch(checkBlock(this.getCellCord()));
    this.updateBlocks();
  };

  updateBlocks = () => {
    this.props.dispatch(updateBlocks(this.getCellCord()));
  };

  render() {
    return (
      <div
        css={{
          width: '90px',
          height: '90px',
          boxShadow: '0 0 0 1px #3333335e',
          cursor: 'pointer'
        }}
        onClick={this.setSign}
      >
        <span
          css={{
            lineHeight: '90px',
            fontSize: '55px'
          }}
        >
          {this.props.cellValue}
        </span>
      </div>
    );
  }
}

export default connect()(GameCell);
