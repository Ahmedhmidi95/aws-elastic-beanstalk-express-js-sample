const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello xCoCoders!'));

app.get('/xcocode', (req, res) => res.send('Contact xCoCoders at: +33 7 65 89 82 14'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
