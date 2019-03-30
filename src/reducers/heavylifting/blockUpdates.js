export function updateBlock(coordinates, state) {
  const updatedGameStatus = state.gameStatus.filter(block => {
    if (block.blockKey === coordinates.block) {
      block.blockState[coordinates.cell] = state.xTurn ? 'X' : 'o';
      block.movesPlayed++;
    }
    return block;
  });
  return updatedGameStatus;
}

export function updateActiveBlocks(coordinates, state) {
  const cellPlayedIndex = coordinates.cell;
  const activeBlockFinished = state.gameStatus.find(block => {
    return block.blockKey === cellPlayedIndex && block.blockFinished;
  });
  if (activeBlockFinished) {
    return state.gameStatus.map(block => {
      if (block.blockFinished) {
        block.blockActive = false;
        return block;
      }
      block.blockActive = true;
      return block;
    });
  }
  return state.gameStatus.map(block => {
    if (block.blockKey === cellPlayedIndex) {
      block.blockActive = true;
      return block;
    }
    block.blockActive = false;
    return block;
  });
}

export function finishBlock(coordinates, state, sign) {
  const updatedGameStatus = state.gameStatus.filter(block => {
    if (block.blockKey === coordinates.block) {
      block.blockFinished = true;
      block.blockResult = sign;
    }
    return block;
  });
  return updatedGameStatus;
}
