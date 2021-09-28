const chooseRecipe = function (bakeryA, bakeryB, recipes) {

  let output = "";
  let output2 = "";

  for (let i = 0; i < recipes.length; i++) {

    for (let j = 0; j < recipes[i].ingredients.length; j++)

      for (let f = 0; f < bakeryA.length; f++) {

        if (recipes[i].ingredients[j] === bakeryA[f]) {

          output += recipes[i].name;
          output += ",";
        }
      }
  }
  for (let i = 0; i < recipes.length; i++) {

    for (let j = 0; j < recipes[i].ingredients.length; j++)

      for (let f = 0; f < bakeryB.length; f++) {

        if (recipes[i].ingredients[j] === bakeryB[f]) {

          output2 += recipes[i].name;
          output2 += ",";
        }
      }
  }

  let result = output.split(",");
  let result2 = output2.split(",");
  let winner = "";

  for (let g = 0; g < result.length; g++) {

    for (let k = 0; k < result2.length; k++) {

      if (result[g] === result2[k]) {

        winner += result2[k];
      }
    }
  }
  return winner;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
