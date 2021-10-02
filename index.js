var express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
var app = express();

const PORT = 9000;

axios.get("/newIntance")
    .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

app.listen(PORT, ()=>{
    console.log(`Server on in port ${PORT}`)
});