function repeatNumbers(array) {

  let result = " ";  

  for (let i = 0; i < array.length; i++) {
    
    for (let j = 0; j < array[i][1]; j++) {

      result += array[i][0];    
    }    
    result += ", "; 
  }  
  return result.substring(0, result.length - 2); 
}; 

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));