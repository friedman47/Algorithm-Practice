/* Model tic-tac-toe using arrays and build a function that returns one of five possible game states. Bonus: extend the function to include boards of arbitrary size. */

// My plan is to build an 'n' dimensional array where each element is itself an 'n' dimensional array and so create a grid.  The function will need to track board size, whether the game is over and if not whose turn it is or if it is then who won.  I may come back to this later to add a randomizer to make it possible to play against a computer (limited probably to a 3x3 board).  I'll use an object to track the board and then give it methods to determine the state.

// Board constructor. Makes board, tracks board, and game state.
function TicTacToeGame(boardsize = 3, player1 = 'X', player2 = 'O'){
  validate();
  let gameStateArray = [player1 + ' to move', player2 + ' to move', player1 + ' wins!', player2 + ' wins!', 'Tie game!'];
  let currentState = gameStateArray[0];
  let board = makeBoard();
  let gameLog = [];

  (function validate() {
    if(typeof boardsize !== 'number') {return "Please pass a number for boardsize"};
  };)

  function makeBoard() {
    let row = [];
    let col = [];
    for(let i = 0; i < boardsize; i++) {
      for(let j = 0; j < boardsize; j++) {
        col.push(".");
      }
      row.push(col);
      col = [];
    }
    return row;
  };

  function playerTurn(){
    if(currentState === gameStateArray[0]) {
      return player1;
    } else if (currentState === gameStateArray[1]) {
      return player2;
    }
  }

  function switchTurn(){
    if(currentState === gameStateArray[0]) {
      currentState = gameStateArray[1];
    } else if (currentState === gameStateArray[1]) {
      currentState = gameStateArray[0];
    }
    return this;
  }

  function makeMove(x, y) {
    if(x < boardsize && y < boardsize && board[x][y] === ".") {
      board[x][y] = playerTurn();
      gameLog.push([x, y]);
      switchTurn();
    } else {
      console.log("Invalid move!  Try again.")
    }
    return this;
  };


  this.showBoard = function() {
    console.log(board);
    return this;
  };
  this.play = function(x, y) {
    makeMove(x, y);
    console.log(board);
    console.log(currentState);
    return this;
  };
  this.log = function() {
    console.log(gameLog);
    return this;
  };
  this.undo = function() {
    let last = gameLog.pop();
    board[last[0]][last[1]] = ".";
    switchTurn();
    console.log(board);
    console.log(currentState);
    return this;
  }
}

var game = new TicTacToeGame(4);
game.showBoard();
game.play(1, 1);
game.play(0, 0);
game.play(2, 2);
game.play(0, 2);
game.play(0, 1);
game.play(2, 1);
game.play(1, 0);
game.play(1, 2).log().play(2,0);
game.play(2, 0);
game.undo();
game.play(2,0).log();
