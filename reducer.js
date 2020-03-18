let myarray = [1, 2, 3, 4, 5, 5, 6, 6, 7];

console.log(
  myarray.reduce((acc, val) => {
    return acc + val;
  })
);



let mySet = new Set(myarray);
console.log(mySet)