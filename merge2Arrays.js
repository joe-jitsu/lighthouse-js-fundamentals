let van1 = [1, 2, 3]; 
let van2 = [4, 5, 6]; 

let cal1 = [0, 3, 1]; 
let cal2 = [9, 7, 2]; 

let coq1 = []; 
let coq2 = [9, 7, 2]; 

let port1 = [5, 10]; 
let port2 = []; 



function concat (array1, array2) {

  let output = []; 

  output = array1.concat(array2);  
   
  return output; 
}


console.log(concat(cal1, cal2)); 