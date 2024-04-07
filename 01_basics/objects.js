//singleton literals ke traah agar declare kare toh sigleton nahi bnta
// constructor se hamesha banegas s ingleton

//Obkect.create singleton


const mySym = Symbol("Key1")


//object literals
const JsUser = {
    name:"Hitesh",
    "Fullname " : "Harsheel",
    [mySym]:"mykey1",
    age:18,
    location:"Mumbai",
    email:"hitsndd@.com",
    isLoggedIn: false,
    lastLoginDays:["Thursday","Sunday"],
}

console.log(JsUser.email); // One way of printing
console.log(JsUser["location"]); // Sexond way of printing

console.log( JsUser[mySym]); // This gives string but we initialsed symbol to solve this problem 
  

JsUser.email = "Harsheel.com" //Values ovveride

Object.freeze(JsUser)

JsUser.email = "Harsheel Sharma.com" //Values ovveride
console.log(JsUser);

JsUser.greeting = function({
    console.log("Hello");
})



