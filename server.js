const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
	res.type('.html');
	res.end('HALLO');
});

app.listen(process.env.PORT, (err) => {
	if (err) throw err;
	console.log(`----- Listening on http://localhost:${process.env.PORT} -----`);
});
