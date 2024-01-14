let cells = document.querySelectorAll(".board__cell");
const reset = document.querySelector(".reset");
const turn = document.querySelector(".turn");
const board = document.querySelector(".board");
const closeModal = document.querySelector(".close__modal");
const modal = document.querySelector(".modal");
const whoWhon = document.querySelector(".who__won");
let counter = 0;
let record = [];
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
cells.forEach((element) => {
  element.addEventListener("click", () => {
    if (record.length === 8) {
      element.textContent = "X";
      element.value = "X";
      element.classList.add("board__cell__off");
      whoWhon.textContent = "We have a tie";
      modal.classList.remove("modal__off");
    } else {
      if (counter === 0) {
        element.textContent = "X";
        element.value = "X";
        element.classList.add("board__cell__off");
        counter = 1;
        turn.textContent = "O";
        setWinner(cells);
      } else {
        element.textContent = "O";
        element.value = "O";
        element.classList.add("board__cell__off");
        counter = 0;
        turn.textContent = "X";
        setWinner(cells);
      }
      record.push(element.value);
    }
  });
});
reset.addEventListener("click", () => {
  cells.forEach((element) => {
    element.textContent = "";
    element.value = "";
    element.classList.remove("board__cell__off");
  });
  record = [];
  counter = 0;
  turn.textContent = "X";
  board.classList.remove("board__off");
});
function setWinner() {
  let possibleWin = winner.map((decisions) => decisions);
  possibleWin.map((decision) => {
    if (
      cells[decision[0]].value === "X" &&
      cells[decision[1]].value === "X" &&
      cells[decision[2]].value === "X"
    ) {
      whoWhon.textContent = "Player 'X'";
      board.classList.add("board__off");
      modal.classList.remove("modal__off");
    } else if (
      cells[decision[0]].value === "O" &&
      cells[decision[1]].value === "O" &&
      cells[decision[2]].value === "O"
    ) {
      whoWhon.textContent = "Player 'O'";
      board.classList.add("board__off");
      modal.classList.remove("modal__off");
    }
  });
}
closeModal.addEventListener("click", () => {
  modal.classList.add("modal__off");
});
