const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://ricardo:ricardo@omnistack-xc3gz.mongodb.net/omnistack?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(require('./routes'));



// app.get('/', (req, res) => {
//     return res.send("teste");
// });

app.listen(3000);