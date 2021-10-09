const squareCode = function (message, decodeOrEncode) {

  function squareEncode(message) {

    let removeSpace = message.toLowerCase().replaceAll(" ", "");
    let base = Math.ceil(Math.sqrt(removeSpace.length));
    let reducedBase = base - 1;
    let output = "";

    // building the first row of squareGrid; 

    for (let i = 0; i < removeSpace.length; i++) {

      output += removeSpace[i];

      if (i > 0 && i % reducedBase === 0) {

        output += "\n";
        break;
      }
    }

    // building all other rows of squareGrid at the same time;  

    for (let j = base; j < removeSpace.length; j++) {

      output += removeSpace[j];

      if ((j + 1) % base === 0) {

        output += "\n";
      }
    };

    // we are building codedMessage; 

    let removeNewlines = output.replaceAll("\n", "");
    let output2 = "";
    let varIncrement = 0;

    let y = 0;
    while (varIncrement <= reducedBase) {

      for (let k = 0; k < removeNewlines.length; k++) {

        if ((k - varIncrement) % base === 0) {

          output2 += removeNewlines[k];
        }

        if (k === removeNewlines.length - 1) {

          varIncrement++;
          output2 += " ";
        }
      }
    }
    // a last step; output2's empty space on the end must be destroyed:

    let finalOutput = output2.trim();

    return finalOutput;
  }; // helperEncode

  function squareDecode(message) {

    let squareGrid = "";
    let splitMessage = message.toLowerCase().split(" ");
    let varIncrement = 0;
    let loopStop = splitMessage.length;

    let i = 0;
    while (varIncrement < loopStop) {

      i++;

      for (let j = 0; j < splitMessage.length; j++) {

        if (splitMessage[j][varIncrement] !== undefined) {

          squareGrid += splitMessage[j][varIncrement]
        }

        if (j === splitMessage.length - 1) {

          squareGrid += "\n";
          varIncrement++;
        }
      }
    }
    return squareGrid;
  }; // helperDecode

  if (decodeOrEncode === "encode") {

    return squareEncode(message);
  }

  if (decodeOrEncode === "decode") {

    return squareDecode(message);
  }
  
} // squareCode end block

console.log(squareCode("chill out", "encode"));
console.log(squareCode("fEed the dog", "encode"));
console.log(squareCode("hAve a nice day", "encode"));
console.log(squareCode("If man was meant to stay on the ground god would have given us roots", "encode"));

console.log(squareCode("clu hlt io", "decode"));
console.log(squareCode("iMTgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau", "decode"));
console.log(squareCode("fto ehg ee dd", "decode"));
console.log(squareCode("hae and via ecy", "decode"));