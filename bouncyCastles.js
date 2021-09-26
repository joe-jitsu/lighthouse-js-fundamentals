const pie = 3.14159;

const sphereVolume = function (radius) {

  return 4/3 * (radius**3) * pie;  
}; 

console.log(sphereVolume(40)); // 268082.3466666666
console.log(sphereVolume(10)); // 4188.786666666666
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
// true

const coneVolume = function (radius, height) {

  return 1/3 * (radius**2) * height * pie; 
}; 

console.log(coneVolume(3, 5)); // 47.12385 
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
// true

const prismVolume = function (height, width, depth) {

  return width * depth * height;
}; 

console.log(prismVolume(3, 4, 5));// 60
console.log(prismVolume(3, 4, 5) === 60); // true


const totalVolume = function (solids) {

  let output = 0; 
  
    for (let i = 0; i < solids.length; i++) {

      if (solids[i].type === "sphere") {

        output += sphereVolume(solids[i].radius); 
      }   
      
      if (solids[i].type === "cone") {

        output += coneVolume(solids[i].radius, solids[i].height);
      }
    
      if (solids[i].type === "prism") {

        output += prismVolume(solids[i].height, solids[i].width, solids[i].depth);
      } 
    }
  return output; 
}; 

const prism = {
  type: 'prism',
  height: 3,
  width: 4, 
  depth: 5
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]; 

console.log(totalVolume(duck)); // 272318.2571833333 
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
// true

