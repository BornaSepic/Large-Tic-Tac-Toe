import { validateBlock } from './heavylifting/validateBlock';
import {
  updateBlock,
  finishBlock,
  updateActiveBlocks
} from './heavylifting/blockUpdates';
import { initializeGameState } from './heavylifting/gameUpdates';

export default function reducer(
  state = {
    gameStatus: initializeGameState(),
    xTurn: true
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_PLAYED_CELL': {
      const gameStatus = updateBlock(action.payload, state);
      return { ...state, gameStatus };
    }
    case 'UPDATE_GAME_SIGN': {
      return { ...state, xTurn: !state.xTurn };
    }
    case 'CHECK_BLOCK_RESULT': {
      const result = validateBlock(action.payload, state);
      if (result.win || result.draw) {
        const gameStatus = finishBlock(action.payload, state, result.victor);
        return { ...state, gameStatus };
      }
      break;
    }
    case 'UPDATE_BLOCKS': {
      const gameStatus = updateActiveBlocks(action.payload, state);
      return { ...state, gameStatus };
    }
    default:
      break;
  }
  return state;
}
