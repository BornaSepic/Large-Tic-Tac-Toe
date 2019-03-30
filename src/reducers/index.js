import { combineReducers } from 'redux';

import gameState from './gameState';
import gameBoard from './gameBoard';

const reducer = combineReducers({
  gameBoard,
  gameState
});

export default reducer;
