const express = require('express');
const app = express();

const names = [];

app.get('/name/set/:imie', (req, res) => {
  const name = req.params.imie;
  names.push(name);
  res.send(`<h3> Podane imię: ${name} <h3>`);
});

app.get('/name/show', (req, res) => {
  if (names.indexOf(names[names.length - 1]) < 0) {
    res.send(`<h3> Nie podano żadnego imienia </h3>`);
  } else {
    res.send(`<h3> Ostatnie imię, które podano: ${names[names.length - 1]} </h3>`);
  }
});

app.get('/name/check', (req, res) => {
  if (names[names.length] < 1) {
    res.send(`<h3> Zbiór jest pusty </h3>`);
  } else {
    res.send(`<h3> Zbiór nie jest pusty </h3>`);
  }
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
