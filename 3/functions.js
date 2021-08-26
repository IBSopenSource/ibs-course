//Hoisting

// const add = function (a, b) {
//     return a + b
// }

// const result = add(1, 2)
// console.log(result);





// function add(a, b) {
//     return a + b
// }


//===============================

// explicit return
// const add = (a, b) => {
//     return a + b
// }

//rule 1
// const log = str => { console.log(str) }

// rule 2 implicit return 
// const add = (a, b) => a + b

//=========================================

//passing function as a parameter

const doLog = (logger, statement) => logger(statement)


// annonymous function
// doLog(
//     function(){
//         console.log("hello")
//     }
// )

doLog((x) => console.log(x), "hello world")