export function validateBlock(coordinates, state) {
  const winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const playedBlock = state.gameStatus.find(
    block => block.blockKey === coordinates.block
  );
  const blockState = playedBlock.blockState;
  let result = { win: false, draw: false, victor: null };

  for (let i = 0; i < winingConditions.length; i++) {
    const condition = winingConditions[i];
    const a = condition[0];
    const b = condition[1];
    const c = condition[2];
    if (
      blockState[a] === blockState[b] &&
      blockState[a] === blockState[c] &&
      blockState[a]
    ) {
      result = { win: true, draw: false, victor: blockState[a] };
    }
  }

  if (!result.win && playedBlock.movesPlayed === 9) {
    result = { win: false, draw: true, victor: null };
  }

  return result;
}
