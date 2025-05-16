const express = require('express');

const app = express(); //tá usando o express

app.get('/', (req, res) => { //nenhum parametro pode ser vazio
    res.send('Welcome!') 
});

app.get('/about', (req, res) => {
    res.send('Learn more about us') 
});

app.get('/features', (req, res) => { 
    res.send('Our main features') 
});

app.get('/contact', (req, res) => {
    res.send('Contact us') 
});

app.listen(3000, () => {
    console.log('Server available on: http://localhost:3000')
})