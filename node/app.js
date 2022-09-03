const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prod = require('./routes/prod');


// port number 
const port = 3000;

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

// Cors Middleware 
app.use(cors());

app.use('/prod', prod);

app.listen(port, '0.0.0.0', () => {
    console.log('Server started on port ' + port);
});


