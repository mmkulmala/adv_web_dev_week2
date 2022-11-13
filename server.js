const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const hello = {
  msg: "Hello world"
}

let resList = []

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html");
});

app.get('/hello', (req, res) => {
  res.send(hello)
})

app.get('/echo/:id', (req, res) => {
  res.send(req.params)
})

app.post('/sum', (req, res) => {
  const arr  = req.body.numbers
  let sum = 0;
  arr.forEach(element => {
    sum += element
  });

  res.json({ sum: sum })
})

app.post('/list', (req, res) => {
  resList.push(req.body.text)
  res.json({ "list": resList })
})

app.listen(port, () => {
  console.log(`Week 2 assignments listening on port ${port}`)
})