const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Server Running///');
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Listening on Port ' + port);
})