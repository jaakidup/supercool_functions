let loopOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let loopTwo = ["a", "b", 10, "d", 3];

loopOne.forEach(val => {
    if (loopTwo.includes(val)) {
        console.log(val);
    } 
});




