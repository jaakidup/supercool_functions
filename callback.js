let name = "Jaaki"
function doSomething(name, cb) {
    console.log("inside doSomething")    
    cb(name)
}


doSomething(name, (value) => console.log(value))

