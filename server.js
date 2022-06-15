const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
app.listen(process.env.PORT, ()=>{
    console.log(`Quizly is running on PORT ${process.env.PORT}!`);
});

app.get('/', (req, res)=>{
    console.log('Hello, Foxes. Welcome');
    res.send('Hello, Foxes. Welcome')
});