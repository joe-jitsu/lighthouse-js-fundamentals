
const calculateChange = function (total, cash) {  

  let num = 0; 
  let floorResult = 0; 
  const object1 = {}; 
  
  num = cash - total; 
  
  if (num >= 2000) {
    
    floorResult = Math.floor(num / 2000); 
    num -= floorResult * 2000; 
    object1.twentyDollar = floorResult;  
  }; 
  
  if (num < 2000 && num >= 1000) {
    
    floorResult = Math.floor(num / 1000); 
    num -= floorResult * 1000;
    object1.tenDollar = floorResult;  
  }; 
  
  if (num < 1000 && num >= 500) {
    
    floorResult = Math.floor(num / 500); 
    num -= floorResult * 500;
    object1.fiveDollar = floorResult;  
  }; 
  
  if (num < 500 && num >= 200) {
    
    floorResult = Math.floor(num / 200); 
    num -= floorResult * 200;
    object1.twoDollar = floorResult;  
  }; 
  
  if (num < 200 && num >= 100) {
    
    floorResult = Math.floor(num / 100); 
    num -= floorResult * 100;
    object1.oneDollar = floorResult;  
  }; 
  
  if (num < 100 && num >= 25) {
    
    floorResult = Math.floor(num / 25); 
    num -= floorResult * 25;
    object1.quarter = floorResult;  
  }; 
  
  if (num < 25 && num >= 10) {
    
    floorResult = Math.floor(num / 10); 
    num -= floorResult * 10;
    object1.dime = floorResult;  
  }; 
  
  if (num < 10 && num >= 5) {
    
    floorResult = Math.floor(num / 5); 
    num -= floorResult * 5;
    object1.nickel = floorResult;  
  }; 
  
  if (num < 5 && num >= 1) {
    
    floorResult = Math.floor(num / 1); 
    num -= floorResult * 1;
    object1.penny = floorResult;  
  } 
   return object1; 
  }; 
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
  
  