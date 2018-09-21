const express = require('express');
const app = express();

const counter = {
		yes: 0,
		no: 0
}

app.use(express.static('./public/zadanieDnia/'));

app.get('/vote/:vote', (req, res) => {
		const voting = req.params.vote;
		counter[voting] += 1;
    res.send(`<h3> Dziękujemy za głos <h3>`);
});


app.get('/votes/check', (req, res) => {
    res.send(`Zagłosowano na tak: ${counter.yes} <br> Zagłosowano na nie: ${counter.no}`);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});
