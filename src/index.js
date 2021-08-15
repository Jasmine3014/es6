//constant 
// const a=10;
// a=4;
// console.log(a)
//cant rewritw const it is used for fixed variable which dont need to change..

//var
// var a=3;
// if(true){
//     var a=8;
//     console.log(a)
// }
// console.log(a) //bot output 8 ...but it should be 8,3...so this prbolem slove let...let works inside the block..cant rewrite inside the block.

//asyncronus
console.log('hello')
setTimeout(() =>{
    console.log("i am in timer")
},2000)
console.log("i am third")
setTimeout(() =>{
    console.log("i am in four")
},1000)