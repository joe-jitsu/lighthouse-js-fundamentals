
 
 let numArray = [4, 6, 7, 3, 8, 19, 3, 5, 1, 8, 3, 7]; 

 function lastIndexOf (array, value) {
           
   let output = []; 

   for (let i = 0; i < array.length; i++) {
   
       if (array[i] === value) {

          output = array.lastIndexOf(value); 
     
          return output;  
        }
   
     }
   return -1;  
 }  

 console.log(lastIndexOf(numArray, 3));   

 