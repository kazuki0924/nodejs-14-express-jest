const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json('Hello world!');
});

console.log(1);

app.listen(8000, () => {
	console.log('Server is now running!');
});
