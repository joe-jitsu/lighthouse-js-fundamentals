const squareCode = function (message) {

  let removeSpace = message.toLowerCase().replaceAll(" ", "");
  let base = Math.ceil(Math.sqrt(removeSpace.length));
  let reducedBase = base - 1;
  let output = "";

  for (let i = 0; i < removeSpace.length; i++) {

    output += removeSpace[i];

    if (i > 0 && i % reducedBase === 0) {

      output += "\n";
      break;
    }
  }

  for (let j = base; j < removeSpace.length; j++) {

    output += removeSpace[j];

    if ((j + 1) % base === 0) {

      output += "\n";
    }
  };

  let removeNewlines = output.replaceAll("\n", "");
  let output2 = "";
  let varIncrement = 0;

  let y = 0;
  while (varIncrement <= reducedBase) {

    y++;

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
  return output2;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("If man was meant to stay on the ground god would have given us roots"));
