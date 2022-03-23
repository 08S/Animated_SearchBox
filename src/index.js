// let userDetails = {
//   name: "Shubham Kumar",
//   age: 28,
//   Designation: "Software Developer",
// Details: function () {
//   console.log(this.name);
// }
// };

// How to invoke individual method by using call and apply?

// let printDetails = function(state, Country){
//   console.log(this.name + " " + state + " " + Country)
// }

// userDetails.Details()

// let userDetails2 = {
//   name: "Sundaram Jee",
//   age: 26,
//   Designation: "CEO"
// };

// This is called function borrowing

// userDetails.Details.call(userDetails2);

// By using call method(the actual argument passed as an individual)

// printDetails.call(userDetails, "Bihar", "India")

// By using apply method(the only difference is to the actual argument passed as an array)

// printDetails.apply(userDetails2, ["Bihar", "India"])

// By using bind method(bind method says that you make a copy of that function and whenever you need you can call that function)

// let bindFun = printDetails.bind(userDetails, "Bihar", "India");
// bindFun()

/* ------------ Currying ----------- */

// function currying(a){
//   return function(b){
//     return function(c){
//       console.log(a+b+c);
//     }
//   }
// }

// currying(2)(3)(6);

let userObj = {
  name: "Shubham",
  age: 28
};

function userInfo(obj) {
  return function (userinfo) {
    return obj[userinfo];
  };
}

let user = userInfo(userObj);
console.log(user("age"));
