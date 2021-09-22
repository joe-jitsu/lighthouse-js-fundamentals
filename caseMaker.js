const camelCase = function (input) {

  let output = input.split(" "); 
  let output2 = output[0].slice(); 

    for (let i = 1; i < output.length; i++) {
  
      output2 += output[i][0].toUpperCase(); 
      output2 += output[i].slice(1); 
    }
  return output2;  
}; 

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

