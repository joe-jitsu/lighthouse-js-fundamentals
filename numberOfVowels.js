const numberOfVowels = function (data) {

  let result = ""; 

for (let i = 0; i < data.length; i++) {

  if (data[i] === "a" || data[i] === "e")  {

      result += data[i]; 
    }

  if (data[i] === "i" || data[i] === "o") {

      result += data[i]; 
   }
    
  if (data[i] === "u")  {

      result += data[i]; 
    }
  
}      
return result.length; 
}; 

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

