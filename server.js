const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
	 res.send('Hey, I\'m a Node.js app!')
});

app.listen(4000, () => {
	console.log('listening');
});