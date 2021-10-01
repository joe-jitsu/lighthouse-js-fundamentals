const organizeInstructors = function (instructors) { 

  const myObject = {}; 
 
    for (let i = 0; i < instructors.length; i++) {

      myObject[instructors[i].course] = [];       
    }; 

    for (let j = 0; j < instructors.length; j++) {

      myObject[instructors[j].course].push(instructors[j].name);  
    }
  return myObject; 
  }; 

  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));
