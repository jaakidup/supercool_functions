
// Let's define a higher order function 
// that returns an array of functions
// that can be accessed in a deconstruction fashion


function useCat() {

    let name = "baby kitten";

    return [
        () => `Meow ${name}`,
        (newName) => name = newName
    ]
}


const [ meow, setName ] = useCat();

console.log(meow())
setName("Frank");
console.log(meow())



