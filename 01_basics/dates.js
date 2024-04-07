// ///dates 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCfeateddate = new Date(2023,0,23)
let myCfeateddate = new Date("2023-01-23")


console.log(myCfeateddate.toLocaleString());

let myTimestamp =  Date.now()

console.log(myTimestamp)
console.log(myCfeateddate.getUTCMilliseconds());

//******IMP INTERVIEWS */

console.log((Date.now()/1000))


let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getSeconds()+1);
console.log(NewDate.getHours());


////IMPPPP
'${newDate.getSeconds()} and the time'

NewDate.toLocaleString('default',{
weekday:"narrow",


})












