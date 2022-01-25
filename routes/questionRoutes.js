const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');
const { v4: uuidv4 } = require('uuid');
const Course = require('../models/courseModel');

router.post('/getByCourseId', async (req, res) => {
    const { courseId } = req.body;
    try {
        const questions = await Question.find({ courseId: courseId });
        res.send(questions);
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.post('/getByQuizId', async (req, res) => {
    const { quizId } = req.body;
    try {
        const questions = await Question.find({ quizId: quizId });
        res.send(questions);
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = router;