const express = require('express');
const db = require('./db.js');
const app = express();
const userRouter = require('./routes/userRoutes');

app.use(express.json());


app.use('/api/users', userRouter);
app.use('/', (req, res) => {
    res.send('Server Running///');
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Listening on Port ' + port);
})