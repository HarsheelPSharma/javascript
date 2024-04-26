// const userEmail = "HARSHSHS"
// if(userEmail){
//     console.log("Got User Email");

// }

// else{
//     console.log("Dont hab suer email...");
// }

// /// Falsy Values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// //Truthy Values

//"0","Flse," ",[],{},function(){}


// const emptyobj = {}
// // if(Object.keys(emptyobj).length ===0){
// //     console.log("Object is empty");
// // }



//Nullish Coalescing Operator (??):null undefined
let val1
// val1 = 5??10
// val1= undefined??9999 /// second answr
// val1 = null??10 // 10 aaygea

val1 = null??10??20
console.log(val1);



/// Ternary operator 
//condition ? true : false

const iceteaprice =100
iceteaprice<80?console.log("Less than 80"):console.log("more than 80");

