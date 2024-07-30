const gridPiece = document.getElementsByClassName("grid");

function handleClick(event) {
  event.target.textContent = "X";
}

for (let i = 0; i < gridPiece.length; i++) {
  gridPiece[i].addEventListener("click", handleClick);
}

const gameboard = (function () {
  let board = [];
  const rows = 3;
  const cols = 3;

  for (let i = 0; i < rows; i++) {
    board.push(new Array(cols).fill("."));
  }

  function displayBoard() {
    let display = "";
    for (let i = 0; i < rows; i++) {
      let row = board[i].join(" | ");
      display += row;
      if (i < rows - 1) {
        display += "\n" + "-".repeat(row.length) + "\n";
      }
    }
    console.log(display);
  }

  function addPiece(piece, row, col) {
    if (row >= 0 && row < rows && col >= 0 && col < cols && board[row][col] === ".") {
      board[row][col] = piece;
      displayBoard();
      if (checkWin(piece)) {
        console.log(`${piece} wins!`);
      } else if (board.flat().every(cell => cell !== ".")) {
        console.log("It's a draw!");
      }
    } else {
      console.log("Invalid move");
    }
  }
  displayBoard();

  function checkWin(piece) {
    // Check rows
    for (let i = 0; i < rows; i++) {
      if (board[i][0] === piece && board[i][1] === piece && board[i][2] === piece) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < cols; i++) {
      if (board[0][i] === piece && board[1][i] === piece && board[2][i] === piece) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] === piece && board[1][1] === piece && board[2][2] === piece) {
      return true;
    }
    if (board[0][2] === piece && board[1][1] === piece && board[2][0] === piece) {
      return true;
    }

    return false;
  }
  return { addPiece };
})();

gameboard.addPiece("x", 0, 0);
gameboard.addPiece("x", 0, 1);
gameboard.addPiece("x", 0, 2);