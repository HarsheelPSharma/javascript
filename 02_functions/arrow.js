const user ={
    user:"Haw",
    price:2020,
 
    welcomeMessage: function(){
console.log('${this.user},Weclome to website');
    }

}

// user.welcomeMessage()
// user.user ="SKSKSK"
// user.welcomeMessage()

// function chai() {
//     let username1 ="HARSHEEK"
//     console.log(this.username1);

    
// // }

// // chai()



// const chai = function(){
//     let username1 ="HARSHEEK"
//          console.log(this.username1);
// }
// chai()


// arrow function---  ()=>

const chai = () =>{
    let username1 ="HARSHEEK"
         console.log(this);
}
chai()

const addtwo=(num1,num2)=>{
    return num1+num2
}
 console.log(addtwo(1,2)); 

const addtwo1 = (num1,num2)=>num1+num2

