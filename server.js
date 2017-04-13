const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.type('.html');
	res.end('HALLO');
});

app.listen(process.env.PORT, (err) => {
	if (err) throw err;
	console.log(`----- Listening on http://localhost:${process.env.PORT} -----`);
});
