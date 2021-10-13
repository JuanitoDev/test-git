// const patients = require("./patients");
// // hardcoding age 65 for now, we can make this dynamic later
// const age = 65;

// const patientsOlderThan = patients.filter(function(patient) {
//   console.log("WHAT IS PATIENT?", patient);
//   if (patient.age > age) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log("OUTPUT:", patientsOlderThan);
// console.log("TOTAL NUMBER OF PATIENTS", patients.length);
// console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);

const patients = require("./patients");
const age = parseInt(process.argv[2]);

// patient.age > age will already resolve to true or false
// so we don't need to use an if statement

const patientsOlderThan = patients.filter(function(patient) {
  return patient.age > age;
})

console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);