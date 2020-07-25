const express = require('express');
const axios = require('axios');
const port = 8080;

var app = express();

app.use(express.urlencoded({ extended: false }));

function getData(){
    axios.get('https://restcountries.eu/')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}

app.get('/main', ( req, res) => {
    getData()
});


app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})