
 
 let numArray = [4, 6, 7, 19, 3, 8, 19, 3, 5, 1, 8, 3, 7]; 

 function lastIndexOf (array, value) {
           
   let output = []; 

   for (let i = array.length -1; i >= 0; i--) {
   
      if (array[i] === value) {

          output = [i]; 

          return output; 
      }

   }  
    
      return -1;      
 }

console.log(lastIndexOf(numArray, 3));   // 11
console.log(lastIndexOf(numArray, 19));  // 6
console.log(lastIndexOf(numArray, 4));   // 0
console.log(lastIndexOf(numArray, 0));   // -1
console.log(lastIndexOf(numArray, 17));   // -1
 



                     
                     
             


 






