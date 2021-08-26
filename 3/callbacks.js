// setTimeout(() => {
//     console.log("before")
// }, 2000)

// console.log("after")

// setTimeout(() => {
//     console.log("hello")
// }, 1000)


// THE Problem
// const getNames = () => {
//     let names;

//     //call the database
//     setTimeout(() => {
//         names = ["Ehab", "Islam", "Andrew"]
//     }, 2000)

//     return names
// }


// const getNames = () => {
//     let names;

//     //call the database
//     setTimeout(() => {
//         names = ["Ehab", "Islam", "Andrew"]
//         return names
//     }, 2000)

// }

// const getNames = () => {
//     let names;

//     //call the database
//     return setTimeout(() => {
//         names = ["Ehab", "Islam", "Andrew"]
//         return names
//     }, 2000)

// }


const getNames = (printNames) => {
    let names;

    //call the database
    setTimeout(() => {
        names = ["Ehab", "Islam", "Andrew"]
        printNames(names)
    }, 2000)

}

getNames((x) => { console.log(x) })

getNames(console.log)
