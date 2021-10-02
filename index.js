var express = require('express');
const cors = require('cors');
var app = express();

const PORT = 9000;

app.listen(PORT, ()=>{
    console.log(`Server on in port ${PORT}`)
});