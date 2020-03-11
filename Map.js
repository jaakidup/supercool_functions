let myMap = new Map();

myMap.set(0, "Amy")
myMap.set(1, "jaaki")




if(myMap.size > 1) {
    console.log('myMap.size :', myMap.size);
}



if(myMap.has(1)) console.log(myMap.get(1));
for (const iterator of myMap.entries()) {
    console.log(iterator);
}

console.log("--------------");



myMap.forEach((val, key) => {
    console.log('key, val :', key, val);
});



console.log("--------------");

let mappy = myMap.values();

console.log(mappy.next().value);
console.log(mappy.next().value);




