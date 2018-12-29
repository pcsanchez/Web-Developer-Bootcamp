var age = Number(prompt("How old are you?"));
if(age < 0){
    console.log("Get the fruck out of here!");
}
if(age === 21){
    console.log("Happy 21st birthday! Free shot!!!");
}
if(age%2 !== 0){
    console.log("Your age is odd!");
}
if(age%Math.sqrt(age) === 0){
    console.log("Your age is a perfect square");
}