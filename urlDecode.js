const urlDecode = function (text) {

  let replaceInput = "";
  let myObject = {};
  let var1 = "";

  for (let i = 0; i < text.length; i++) {

    if (text[i] === "&") {

      replaceInput = text.replaceAll("%20", " ").split("&");

      for (let j = 0; j < replaceInput.length; j++) {

        var1 = replaceInput[j].split("=");
        myObject[var1[0]] = var1[1];
      }
    }
  }

  if (replaceInput == false) {

    replaceInput = text.replaceAll("%20", " ").split("=");
    myObject[replaceInput[0]] = replaceInput[1];
  } 
  return myObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain&duck=rubber"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);