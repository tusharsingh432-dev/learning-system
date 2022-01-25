const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');
const { v4: uuidv4 } = require('uuid');
const Course = require('../models/courseModel');

router.post('/create', async (req, res) => {
    const { quiz, questions, courseId } = req.body;
    const quizId = uuidv4();
    try {
        const newQuiz = new Quiz({
            ...quiz,
            quizId,
            courseId
        })
        const savedQuiz = await newQuiz.save();

        const course = await Course.findOne({ courseId: courseId });
        course.quiz.push(quizId);
        course.save();

        questions.map(async (question) => {
            const newQuestion = new Question({
                ...question,
                questionId: uuidv4(),
                quizId,
                courseId
            })
            const savedQuestion = await newQuestion.save();
        })


        res.send('Success');
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

router.post('/getByCourseId', async (req, res) => {
    const { courseId } = req.body;
    try {
        const quizes = await Quiz.findOne({ courseId: courseId });
        res.send(quizes);
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.post('/getById', async (req, res) => {
    const { quizId } = req.body;
    console.log(quizId);
    try {
        const quizes = await Quiz.findOne({ quizId: quizId });
        res.send(quizes);
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.post('/update', async (req, res) => {
    const { quiz, questions, courseId } = req.body;
    console.log(quiz);
    console.log(questions);
    console.log(courseId);
    try {
        const response = await Quiz.findOne({ courseId: courseId });
        response.name = quiz.name;
        response.totalMarks = quiz.totalMarks;
        response.passingMarks = quiz.passingMarks;
        response.save();

        await Question.deleteMany({ quizId: response.quizId });
        questions.map(async (question) => {
            const newQuestion = new Question({
                ...question,
                questionId: uuidv4(),
                quizId: response.quizId
            })
            const savedQuestion = await newQuestion.save();
        })
        res.send('Success');
    } catch (err) {
        res.status(404).json({ message: err });
    }
})

module.exports = router;