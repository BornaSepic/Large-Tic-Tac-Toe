export function updateCell(cellCordinates) {
  return { type: 'UPDATE_PLAYED_CELL', payload: cellCordinates };
}
export function updateGameSign() {
  return { type: 'UPDATE_GAME_SIGN' };
}
export function checkBlock(cellCordinates) {
  return { type: 'CHECK_BLOCK_RESULT', payload: cellCordinates };
}
export function updateBlocks(cellCordinates) {
  return { type: 'UPDATE_BLOCKS', payload: cellCordinates };
}
