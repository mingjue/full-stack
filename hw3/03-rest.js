const express = require('express');
const fetch = require("node-fetch");
const port = 8080;

var app = express();

app.use(express.urlencoded({ extended: false }));

const url = "https://restcountries.eu/rest/v2/all";

let rObj = {}
let po = {}
let re = {}
const getDataCap = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    for (var i = 0 ; i<json.length; i++){
      rObj[json[i].name] = json[i].capital
    }
    
  } catch (error) {
    console.log(error);
  }
  console.log(JSON.stringify(rObj));
  return rObj
};

const getDataCpo = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    for (var i = 0 ; i<json.length; i++){
      if (json[i].population > 20000000){
        po[json[i].name] = json[i].capital
      }
    }
  } catch (error) {
    console.log(error);
  }
  console.log(JSON.stringify(po));
  return po
};

const getDataCre = async () => {
  try {
    let region = ['africa','americas','asia','europe','oceania']
      
    for (var i = 0; i<6 ;i++){
      let reurl = "https://restcountries.eu/rest/v2/region/"
      reurl = reurl+region[i]
      console.log(reurl)
      const response = await fetch(reurl);
      const json = await response.json();
      re[region[i]]=json.length
    }
  } catch (error) {
    console.log(error);
  }
  console.log(JSON.stringify(re));
  return re
};


app.get('/main', async(req, res) => {
  res.send(await getDataCap(url))
});

app.get('/populous', async(req, res) => {
  res.send(await getDataCpo(url))
});

app.get('/regions', async(req, res) => {
  res.send(await getDataCre())
});



app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})