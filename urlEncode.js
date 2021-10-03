const urlEncode = function (text) {

  let output = "";
  let splitString = text.trim().split(" ");

  output += splitString.slice(0, 1);

  for (let i = 1; i < splitString.length; i++) {

    output += "%20";
    output += splitString[i].slice(0)
  };

  return output;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

