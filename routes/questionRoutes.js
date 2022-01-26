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

router.post('/getQuestionForTest', async function (req, res) {
    const { quizId } = req.body;
    try {
        const questions = await Question.find({ quizId: quizId });
        const answerlessQuestions = questions.map(ques => {
            return {
                question: ques.question,
                quizId,
                courseId: ques.courseId,
                option1: { name: ques.option1.name },
                option2: { name: ques.option2.name },
                option3: { name: ques.option3.name },
                option4: { name: ques.option4.name },
                questionId: ques.questionId,
                marks: ques.marks
            }

        })
        // console.log(answerlessQuestions);
        res.send(answerlessQuestions);
    } catch (err) {
        res.status(500).json({ error: err });
    }
})

router.post('/checkAnswers', async (req, res) => {
    const { question } = req.body;
    try {
        const questions = await Question.findOne({ questionId: question.questionId });
        // console.log(questions);
        if (String(questions.option2.isCorrect) === String(question.option2.isCorrect)
            && String(questions.option1.isCorrect) === String(question.option1.isCorrect)
            && String(questions.option3.isCorrect) === String(question.option3.isCorrect)
            && String(questions.option4.isCorrect) === String(question.option4.isCorrect)
        ) {
            res.send(true);
            return;
        } else {
            res.send(false);    
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
})

module.exports = router;