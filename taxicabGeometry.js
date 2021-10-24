const blocksAway = function (directions) {

  const object1 = { East: 0, North: 0 };
  let lastCardinal = "";

  for (let i = 0; i < directions.length; i++) {

    if (i === 0) {

      if (directions[i] === "right") {

        lastCardinal = "east"; 
      }

      if (directions[i] === "left") {

        lastCardinal = "north";  
      }
    }  

    if (i > 0 && typeof directions[i] === "string") {

      if (lastCardinal === "north" && directions[i] === "right") {

        lastCardinal = "east";
      }

      else if (lastCardinal === "south" && directions[i] === "right") {

        lastCardinal = "west";
      }

      else if (lastCardinal === "east" && directions[i] === "right") {

        lastCardinal = "south";
      }

      else if (lastCardinal === "west" && directions[i] === "right") {

        lastCardinal = "north";
      }


      if (lastCardinal === "north" && directions[i] === "left") {

        lastCardinal = "west";
      }

      else if (lastCardinal === "south" && directions[i] === "left") {

        lastCardinal = "east";
      } 

      else if (lastCardinal === "east" && directions[i] === "left") {

        lastCardinal = "north";
      }

      else if (lastCardinal === "west" && directions[i] === "left") {

        lastCardinal = "south";
      }

    } 

    if (typeof directions[i] === "number") {

      if (lastCardinal === "east") {

        object1.East += Number([directions[i]]);
      }

      if (lastCardinal === "west") {

        object1.East -= Number([directions[i]]);
      }

      if (lastCardinal === "north") {

        object1.North += Number([directions[i]]);
      }

      if (lastCardinal === "south") {

        object1.North -= Number([directions[i]]);
      }
    } 
  } 
  return object1;
}; 

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

