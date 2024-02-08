let months = +prompt("enter the months of the year");

if (months === 1) {
  console.log("January");
} else if (months === 2) {
  console.log("February ");
} else if (months === 3) {
  console.log("March ");
} else if (months === 4) {
  console.log("April");
} else if (months === 5) {
  console.log("May");
} else if (months === 6) {
  console.log("June");
} else if (months === 7) {
  console.log("July");
} else if (months === 8) {
  console.log("August ");
} else if (months === 9) {
  console.log("September ");
} else if (months === 10) {
  console.log("October ");
} else if (months === 11) {
  console.log("November ");
} else if (months === 12) {
  console.log("December ");
} else {
  console.log("there is no such months");
}



switch (months) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("There is no such month.");
    break;
}
