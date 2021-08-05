const stations = [
  ['Big Bear Donair', 10, 'restaurant'], 
  ['Bright Lights Elementary', 50, 'school'], 
  ['Moose Mountain Community Centre', 45, 'community centre']
]; 


const chooseStations = function (stations) {

  let newArray = []; 

  for (let loopVariable of stations) {
  
    if (loopVariable[2] === 'school' || loopVariable[2] === 'community centre') {
 
      if (loopVariable[1] >= 20) {      
      
        newArray.push(loopVariable[0]);   
      } 
    }
  }
  return newArray; 
}

console.log(chooseStations(stations));  