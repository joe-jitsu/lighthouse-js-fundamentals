
const talkingCalendar = function (date) {

  let splitDate = date.split("/"); // step 1 - split input date onto an array;
  let splitYear = splitDate.splice(0, 1); // step 2 - splice the year onto an array;
  let splitYearString = splitYear.toString(); // step 3 - turn that year into a string;
  let newOrder = splitDate.splice(0); // step 4 - splice the month and day onto this new array;
  newOrder.push(splitYearString); // step 5 - push onto the end of the array, the year-string;

  // when I didn't change the year into a string: [05, 31, [1978]]; 
  // after changing it to a string: [05, 31, 1978]; - no more nested array;  

  let result = "";

  for (let i = 2; i < newOrder.length; i++) {

    switch (newOrder[0]) {

      case "01":
        result += "January ";
        break;
      case "02":
        result += "February ";
        break;
      case "03":
        result += "March ";
        break;
      case "04":
        result += "April ";
        break;
      case "05":
        result += "May ";
        break;
      case "06":
        result += "June ";
        break;
      case "07":
        result += "July ";
        break;
      case "08":
        result += "August ";
        break;
      case "09":
        result += "September ";
        break;
      case "10":
        result += "October ";
        break;
      case "11":
        result += "November ";
        break;
      case "12":
        result += "December ";
        break;
    }
  };

  for (let j = 2; j < newOrder.length; j++) {

    switch (newOrder[1]) {

      case "01":
        result += "1st ";
        break;
      case "02":
        result += "2nd ";
        break;
      case "03":
        result += "3rd ";
        break;
      case "04":
        result += "4th ";
        break;
      case "05":
        result += "5th ";
        break;
      case "06":
        result += "6th ";
        break;
      case "07":
        result += "7th ";
        break;
      case "08":
        result += "8th ";
        break;
      case "09":
        result += "9th ";
        break;
      case "10":
        result += "10th ";
        break;
      case "11":
        result += "11th ";
        break;
      case "12":
        result += "12th ";
        break;
      case "13":
        result += "13th ";
        break;
      case "14":
        result += "14th ";
        break;
      case "15":
        result += "15th ";
        break;
      case "16":
        result += "16th ";
        break;
      case "17":
        result += "17th ";
        break;
      case "18":
        result += "18th ";
        break;
      case "19":
        result += "19th ";
        break;
      case "20":
        result += "20th ";
        break;
      case "21":
        result += "21st ";
        break;
      case "22":
        result += "22nd ";
        break;
      case "23":
        result += "23rd ";
        break;
      case "24":
        result += "24th ";
        break;
      case "25":
        result += "25th ";
        break;
      case "26":
        result += "26th ";
        break;
      case "27":
        result += "27th ";
        break;
      case "28":
        result += "28th ";
        break;
      case "29":
        result += "29th ";
        break;
      case "30":
        result += "30th ";
        break;
      case "31":
        result += "31st ";
        break;
    }
  };

  result += splitYearString;

  return result;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));