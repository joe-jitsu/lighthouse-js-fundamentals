const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']; 


function finalPosition (moves) {

  let resultArray = [0, 0];  

  for (let i = 0; i < moves.length; i++) {


    if (moves[i] === "north") {
     
    resultArray[1] += 1; 
  }

    if (moves[i] === "west") {
      
    resultArray[0] -= 1;
  }

    if (moves[i] === "south") {

    resultArray[1] -= 1; 
  }

    if (moves[i] === "east") {

    resultArray[0] += 1; 
  }

  
  }
 
  console.log(resultArray)
}


finalPosition(moves); 

