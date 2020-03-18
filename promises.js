


let something = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 2000);
    });
}




something("jaaki").then((result) => {
    console.log('result :', result);
});



(async () => {
    let result = await something("Amy");
    console.log(result);
})();



// result = "something";
// console.log(result);



mytag = "my tag";
console.log('mytag :', mytag);