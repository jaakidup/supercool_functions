const express = require('express')
const app = express()
const port = 3000





var bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




const logger = (req, res, next) => {

    let label = req.method + " " + req.url;
    console.time(label)
    next()
    console.timeEnd(label)
}

app.use(logger);


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/sweet', (req, res) => {
    res.status(200).send("Sweet jesus!");
})

app.post('/update', (req, res) => {
    // const { name, description } = req.body;

    console.log(req.body);

    // res.send(`Name ${name}, desc ${description}`);

    res.status(200).send(req.body);

});
  