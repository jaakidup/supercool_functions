const axios = require("axios");

function ApiBuilder(baseurl) {
    baseurl + "/";
    return {
        async get(path) {
            let requestURL = path ? baseurl + path: baseurl;
            return axios.get(requestURL).then((response) => {
                return response.data;
            }).catch((error) => {
                return console.log("Error: ", requestURL);
            }).finally(() => {
                return console.log("Finally :", baseurl);
            })
        },
        async post(path, payload) {
            let requestURL = path ? baseurl + path: baseurl;
            return axios.post(requestURL, payload).then((response) => {
                return response.data;
            }).catch((error) => {
                return console.log("Error: ", requestURL);
            }).finally(() => {
                return console.log("Finally :", baseurl);
            })
        }
    }
}






let Printful = ApiBuilder("http://moonspin.web.app");
let result = Printful.get().then((catalog) => {
    console.log(catalog);
    return catalog
});

console.log("After request ");


(async() => {
    console.log( await result);
})()




// console.log("Now let's await the promise");
// result.then(response => {
//     console.log(response);
// })