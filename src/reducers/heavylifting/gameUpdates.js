export function initializeGameState() {
  const gameStatus = [];
  for (let i = 0; i < 9; i++) {
    gameStatus.push({
      blockKey: i,
      blockState: ['', '', '', '', '', '', '', '', ''],
      blockActive: true,
      blockFinished: false,
      blockResult: null,
      movesPlayed: 0
    });
  }
  return gameStatus;
}
