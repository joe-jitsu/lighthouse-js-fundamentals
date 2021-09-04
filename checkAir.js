const checkAir = function (samples, threshold) {

  let dirty = 0;  
  let clean = 0; 
  let total = 0;
  let dirtyPercentage = 0; 
  let thresh = threshold; 

for (let i = 0; i < samples.length; i++) {

if (samples[i] === "dirty") {

    dirty++;  
  }    

if (samples[i] === "clean") {

    clean++;   
  }
}

    total = dirty + clean; 
    dirtyPercentage = dirty / total;    

if (dirtyPercentage < thresh) {

     return "Clean"; 
  }

else {

     return "Polluted"; 
    
    }
}; 

console.log(checkAir(
['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
0.3
));

console.log(checkAir(
['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
0.25
));

console.log(checkAir(
['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
0.9
))

