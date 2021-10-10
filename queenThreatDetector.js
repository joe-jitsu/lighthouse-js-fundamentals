const generateBoard = function (whiteQueen, blackQueen) {

  let chessArray = [

    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  chessArray[whiteQueen[0]][whiteQueen[1]] = 1;
  chessArray[blackQueen[0]][blackQueen[1]] = 1;

  return chessArray.join("\n");
};

const queenThreat = function (generatedBoard) {

  let splitBoard = generatedBoard.replaceAll(",", "").split("\n");
  let array1 = [];
  let array2 = [];
  let output = false;

  for (let i = 0; i < splitBoard.length; i++) {

    for (let j = 0; j < splitBoard.length; j++) {

      if (splitBoard[i][j] === "1" && array1 == false) {

        array1[0] = i;
        array1[1] = j;
      }

      if (splitBoard[i][j] === "1") {

        array2[0] = i;
        array2[1] = j;
      }
    }
  }

  if (array1[0] === array2[0]) {

    output = true;
  }

  if (array1[1] === array2[1]) {

    output = true;
  }

  let num = array2[0] - array1[0];

  if (num > array2[1]) {

    num2 = num + array2[1];
  }

  if (num <= array2[1]) {

    num2 = array2[1] - num;
  }

  if (num2 === array1[1]) {

    output = true;
  }

  return generatedBoard + "\n" + output;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(queenThreat(generatedBoard));
