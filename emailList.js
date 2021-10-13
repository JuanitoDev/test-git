// emailList.js
const elements = require("./elements");

// console.log(elements);

// map executes the callback function for each element
const emailAdresses = elements.map(function(patient) {
  console.log("WHAT IS PATIENT", patient);
  // return only the email addresses to the output array
  return patient.email;
});

console.log(emailAdresses);
console.log(elements);