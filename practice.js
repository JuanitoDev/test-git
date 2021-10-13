// //Objects
// const name = "Juan";
// const age = 30;
// const gender = "m"
// const nationality = "ARG 🇦🇷"

// //An Object
// const student = {
    
// }


// // Arrays
// const names = ["David", "Rein", "Jeroen"];

// // we declare a function that takes a name
// function greet(name) {
//   console.log(`Hi ${name}`);
// }
// greet()

const teachers = [
    { name: "Rein", age: 32 },
    { name: "Wouter", age: 25 },
    { name: "Matias", age: 28 },
  ];
  
  const matias = teachers.find(function(teacher) {
    if (teacher.name === "Matias") {
      return true;
    } else {
      return false;
    }
  });
  
  console.log(matias); // { name: "Matias", age: 28 }


  const phoneList = patients.map(patient => patient.phoneNumber);
  console.log(phoneList);