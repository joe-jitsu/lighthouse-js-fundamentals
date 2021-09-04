const urlEncode = function (text) {

  let var2 = "";    
  let var1 = text.trim();         

for (let i = 0; i < var1.length; i++) {

       var2 += var1[i];  

    if (var1[i] === " ") {
  
       var2 += "%20";
       
      }  
   }                
 return var2.replaceAll(" ", "");    
}; 

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

