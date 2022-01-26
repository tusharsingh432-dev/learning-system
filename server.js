const express = require('express');
const path = require('path');
const db = require('./db.js');
const app = express();
const questionRouter = require('./routes/questionRoutes');
const quizRouter = require('./routes/quizRoutes');
const userRouter = require('./routes/userRoutes');
const courseRouter = require('./routes/courseRoutes');
app.use(express.json());


app.use('/api/users', userRouter);
app.use('/api/course', courseRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/question', questionRouter);
// app.use('/', (req, res) => {
//     res.send('Server Running///');
// })


app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Listening on Port ' + port);
})