let input = "jaaki";



function myfunc(inp) {
    // if(!inp) throw Error("No input received") 
    if(!inp) {
       return "zero"
    } 
    return inp;
}

console.log(myfunc(input))
console.log(myfunc())

