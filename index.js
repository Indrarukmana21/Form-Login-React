const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const PORT              = 3001

app.use{bodyParser.json()};

app.listen(PORT, (req,res) => {
    console.log('server run port ${PORT}')
})