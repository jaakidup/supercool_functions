let myArray = ["jaaki", "is", "cool"];


// returns true if all array values meet the condition
let fletters = myArray.every((val) => {
    return val.length >= 2;
});

console.log(fletters);




// returns true if some of the array values meet the condition
let fletters = myArray.some((val) => {
    return val.length > 4;
});

console.log(fletters);




