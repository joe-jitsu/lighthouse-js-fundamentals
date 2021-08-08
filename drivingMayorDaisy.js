const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
const speed = 38


const carPassing = function (cars, speed)   {
    
  let myObject = {
    time: 0, 
    speed: 0 
  }; 
   
  let timeNow = Date.now();      
   
  myObject['speed'] += speed; 

  myObject['time'] += timeNow;
   
  cars.push(myObject); 

  return cars; 

}

console.log(carPassing(cars, speed)); 
