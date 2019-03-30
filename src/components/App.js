import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import GameBoard from './GameBoard';
import PlayerInfo from './PlayerInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerInfo xTurn={this.props.playerInfo} />
        <GameBoard gameBlocks={this.props.gameBlocks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameBlocks: state.gameState.gameStatus,
    playerInfo: state.gameState.xTurn
  };
}

export default connect(mapStateToProps)(App);
