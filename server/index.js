const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');
const auth = require('./middleware/auth')

const port = process.env.PORT || 3001;
const uri = process.env.Mongo_uri;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// function conn() {

// })};
const conn = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};




// app.use(auth);


app.use('/app', require('./routers/registerRoute'))

app.listen(port, () => {
    conn();
    console.log(`server and the database is connected ${port}`)
})