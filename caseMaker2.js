const makeCase = function (input, style) {

  let output = "";

  function camelCase(input) {

    let input2 = input.trim().toLowerCase();
    let splitInput = input2.split(" ");
    let output = "";
    output += splitInput.slice(0, 1);

    for (let i = 1; i < splitInput.length; i++) {

      output += splitInput[i][0].toUpperCase();
      output += splitInput[i].slice(1);
    }
    return output;
  };

  function pascalCase(input) {

    let input2 = input.trim().toLowerCase();
    let splitInput = input2.split(" ");
    let output = "";

    for (let i = 0; i < splitInput.length; i++) {

      output += splitInput[i][0].toUpperCase();
      output += splitInput[i].slice(1);
    }
    return output;
  };

  function snakeCase(input) {

    let trim = input.trim().toLowerCase();
    let replace = trim.replaceAll(" ", "_");

    return replace;
  };

  function kebabCase(input) {

    let trim = input.trim().toLowerCase();
    let replace = trim.replaceAll(" ", "-");

    return replace;
  };

  function titleCase(input) {

    let trim = input.trim().toLowerCase();
    let splitString = trim.split(" ");
    let output = "";

    for (let i = 0; i < splitString.length; i++) {

      output += splitString[i][0].toUpperCase();
      output += splitString[i].slice(1);
      output += " ";
    }
    return output;
  };

  function upperCase(input) {

    let trim = input.trim().toUpperCase();

    return trim;
  };

  function lowerCase(input) {

    let trim = input.trim().toLowerCase();

    return trim;
  };

  function vowelCase(input) {

    let trim = input.trim().toLowerCase();
    output = "";

    for (let i = 0; i < trim.length; i++) {

      switch (trim[i]) {

        case "a":
          output += trim[i].toUpperCase();
          break;
        case "e":
          output += trim[i].toUpperCase();
          break;
        case "i":
          output += trim[i].toUpperCase();
          break;
        case "o":
          output += trim[i].toUpperCase();
          break;
        case "u":
          output += trim[i].toUpperCase();
          break;


        case "b":
          output += trim[i].toLowerCase();
          break;
        case "c":
          output += trim[i].toLowerCase();
          break;
        case "d":
          output += trim[i].toLowerCase();
          break;
        case "f":
          output += trim[i].toLowerCase();
          break;
        case "g":
          output += trim[i].toLowerCase();
          break;
        case "h":
          output += trim[i].toLowerCase();
          break;
        case "j":
          output += trim[i].toLowerCase();
          break;
        case "k":
          output += trim[i].toLowerCase();
          break;
        case "l":
          output += trim[i].toLowerCase();
          break;
        case "m":
          output += trim[i].toLowerCase();
          break;
        case "n":
          output += trim[i].toLowerCase();
          break;
        case "p":
          output += trim[i].toLowerCase();
          break;
        case "q":
          output += trim[i].toLowerCase();
          break;
        case "r":
          output += trim[i].toLowerCase();
          break;
        case "s":
          output += trim[i].toLowerCase();
          break;
        case "t":
          output += trim[i].toLowerCase();
          break;
        case "v":
          output += trim[i].toLowerCase();
          break;
        case "w":
          output += trim[i].toLowerCase();
          break;
        case "x":
          output += trim[i].toLowerCase();
          break;
        case "y":
          output += trim[i].toLowerCase();
          break;
        case "z":
          output += trim[i].toLowerCase();
          break;
        default:
          output += trim[i];
          break;
      }
    }
    return output;
  };

  function consonantCase(input) {

    let trim = input.trim().toLowerCase();
    output = "";

    for (let i = 0; i < trim.length; i++) {

      switch (trim[i]) {

        case "a":
          output += trim[i].toLowerCase();
          break;
        case "e":
          output += trim[i].toLowerCase();
          break;
        case "i":
          output += trim[i].toLowerCase();
          break;
        case "o":
          output += trim[i].toLowerCase();
          break;
        case "u":
          output += trim[i].toLowerCase();
          break;


        case "b":
          output += trim[i].toUpperCase();
          break;
        case "c":
          output += trim[i].toUpperCase();
          break;
        case "d":
          output += trim[i].toUpperCase();
          break;
        case "f":
          output += trim[i].toUpperCase();
          break;
        case "g":
          output += trim[i].toUpperCase();
          break;
        case "h":
          output += trim[i].toUpperCase();
          break;
        case "j":
          output += trim[i].toUpperCase();
          break;
        case "k":
          output += trim[i].toUpperCase();
          break;
        case "l":
          output += trim[i].toUpperCase();
          break;
        case "m":
          output += trim[i].toUpperCase();
          break;
        case "n":
          output += trim[i].toUpperCase();
          break;
        case "p":
          output += trim[i].toUpperCase();
          break;
        case "q":
          output += trim[i].toUpperCase();
          break;
        case "r":
          output += trim[i].toUpperCase();
          break;
        case "s":
          output += trim[i].toUpperCase();
          break;
        case "t":
          output += trim[i].toUpperCase();
          break;
        case "v":
          output += trim[i].toUpperCase();
          break;
        case "w":
          output += trim[i].toUpperCase();
          break;
        case "x":
          output += trim[i].toUpperCase();
          break;
        case "y":
          output += trim[i].toUpperCase();
          break;
        case "z":
          output += trim[i].toUpperCase();
          break;
        default:
          output += trim[i];
          break;
      }
    }
    return output;
  };

  if (typeof style === "object") {

    for (let i = 0; i < style.length; i++) {

      switch (style[i]) {

        case "camel":
          output = camelCase(input);
          break;
        case "pascal":
          output = pascalCase(input);
          break;
        case "snake":
          output = snakeCase(input);
          break;
        case "kebab":
          output = kebabCase(input);
          break;
        case "title":
          output = titleCase(input);
          break;
      }
    }

    for (let j = 0; j < style.length; j++) {

      if (output == false) {

        switch (style[j]) {

          case "vowel":
            output = vowelCase(input);
            break;
          case "consonant":
            output = consonantCase(input);
            break;
        }
      }
      
      if (output != false) {

        switch (style[j]) {

          case "vowel":
            output = vowelCase(output);
            break;
          case "consonant":
            output = consonantCase(output);
            break;
        }
      }
    }

    for (let k = 0; k < style.length; k++) {

      if (output == false) {

        switch (style[k]) {

          case "upper":
            output = upperCase(input);
            break;
          case "lower":
            output = lowerCase(input);
            break;
        }
      }
      
      if (output != false) {

        switch (style[k]) {

          case "upper":
            output = upperCase(output);
            break;
          case "lower":
            output = lowerCase(output);
            break;
        }
      }
    }
  }
  
  switch (style) {

    case "camel":
      output = camelCase(input);
      break;

    case "pascal":
      output = pascalCase(input);
      break;

    case "snake":
      output = snakeCase(input);
      break;

    case "kebab":
      output = kebabCase(input);
      break;

    case "title":
      output = titleCase(input);
      break;

    case "vowel":
      output = vowelCase(input);
      break;

    case "consonant":
      output = consonantCase(input);
      break;

    case "upper":
      output = upperCase(input);
      break;

    case "lower":
      output = lowerCase(input);
      break;
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["snake", "upper"]));
console.log(makeCase("this is a string", ["upper", "kebab"]));
console.log(makeCase("this is a string", ["snake", "lower"]));
console.log(makeCase("this is a string", ["lower", "kebab"]));