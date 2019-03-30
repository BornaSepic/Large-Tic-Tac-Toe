/** @jsx jsx */
import { jsx } from '@emotion/core';
const PlayerInfo = props => (
  <h1
    css={{
      fontFamily: 'sans-serif'
    }}
  >{`Current player: ${props.xTurn ? 'X' : 'O'}`}</h1>
);

export default PlayerInfo;
