const mongoose = require('mongoose');
const express = require('express');
const app = express();

// middelware

const middelware = (req,res, next) =>{
    console.log('hello from middleware');
    next();
};

const DB = 'mongodb+srv://sandeshkanere:B7ZrEkm77oTvIO54@cluster0.dwh6epf.mongodb.net/mern?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log('connection succesfull');
}).catch((err)=>{
    console.log('no connection');
})

app.get('/', (req,res) => {
    res.send(`hello from server`);
});

app.get('/about', middelware,(req,res) => {
    console.log('hello my about');
    res.send(`hello about me from server`);
});

app.get('/contact', (req,res) => {
    res.send(`hello contact me from server`);
});

app.get('/signin',(req,res) => {
    res.send(`hello about me from server`);
});
app.get('/signup',(req,res) => {
    res.send(`hello about me from server`);
});

app.listen(3000, () => {
    console.log(`server running at port 3000`);
});

