const whereCanIPark = function (spots, vehicle) {
 
  let output = [0, 0]; 

for (let i = 0; i < spots.length; i++) {

    for (let j = 0; j < spots.length; j++) {
      
        if (vehicle === "regular" && spots[i][j] === "R") {

           output[0] = spots.indexOf(spots[j]);    
           output[1] = spots.indexOf(spots[i]);        
           return output;          
          }           
       
        else if (vehicle === "small" && spots[i][j] === "S") { 
       
          output[0] = spots.indexOf(spots[j]);    
          output[1] = spots.indexOf(spots[i]);        
          return output; 
         }
      
        else if (vehicle === "small" && spots[i][j] === "R") { 
       
          output[0] = spots.indexOf(spots[j]);    
          output[1] = spots.indexOf(spots[i]);        
          return output; 
         }
      
        else if (vehicle === "motorcycle" && spots[i][j] === "M") { 
       
          output[0] = spots.indexOf(spots[j]);    
          output[1] = spots.indexOf(spots[i]);        
          return output; 
         }

        else if (vehicle === "motorcycle" && spots[i][j] === "S") { 
       
          output[0] = spots.indexOf(spots[j]);    
          output[1] = spots.indexOf(spots[i]);        
          return output; 
         }

        else if (vehicle === "motorcycle" && spots[i][j] === "R") { 
       
          output[0] = spots.indexOf(spots[j]);    
          output[1] = spots.indexOf(spots[i]);        
          return output; 
         }
      }
  }  
  return false; 
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
