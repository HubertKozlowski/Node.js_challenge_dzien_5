const express = require('express');
const app = express();

app.get('/:number1/:number2', (req, res) => {
  const number1 = parseInt(req.params.number1);
  const number2 =  parseInt(req.params.number2);
  const sum = number1 + number2;
  res.send(`${number1} + ${number2} = ${sum}`);
});

app.listen(3000, () => {
  console.log('Serwer uruchomiony na porcie 3000');
});
