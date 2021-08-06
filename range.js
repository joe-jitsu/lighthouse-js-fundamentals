

function range (start, end, step) {
  
  let output = [];
  
  for (let i = start; i < end;) {
    
    if (step === 0 || step < 0) {
      return []; 
    }  
      
  i = i + step;   
    
  output.push(i);  
}
return output;    
}

console.log(range(0, 8, 2));       

console.log(range(-9, 3, 3));   