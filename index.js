const express = require('express');
const app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});

const port = 5000;

app.listen(port,  () => {
    console.log(`Server started on port ${port}`)
});