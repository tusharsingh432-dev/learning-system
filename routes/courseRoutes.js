const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');
const Quiz = require('../models/quizModel');
const Question = require('../models/questionModel');
const { v4: uuidv4 } = require('uuid');

router.post('/create', async (req, res) => {
    const course = req.body;

    const courseId = uuidv4();
    const newCourse = new Course({
        ...course,
        courseId
    })

    try {
        const response = await newCourse.save();
        res.send('Success');
    } catch (err) {
        console.log(err);
        res.send(404).json({ message: err });
    }

})

router.get('/getCourses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.send(courses);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
})

router.post('/getcoursebyid', async (req, res) => {
    const { id } = req.body;
    // console.log(id);
    try {
        const response = await Course.findOne({ courseId: id });
        // console.log(response)
        res.send(response);
    } catch (err) {
        res.status(404).json({ message: err });
    }
})

router.post('/update', async (req, res) => {
    const { name, id } = req.body;
    try {
        const response = await Course.findOne({ courseId: id });
        response.name = name;
        response.save();
        res.send('Success');
    } catch (err) {
        res.status(404).json({ message: err });
    }
})

router.post('/delete', async (req, res) => {
    const { id } = req.body;
    // console.log(id + ' courseId');
    try {
        const quiz = await Quiz.findOne({ courseId: id });
        if (quiz != null) {
            await Question.deleteMany({ quizId: quiz.quizId });
            await Quiz.deleteOne({ courseId: id });
        }
        await Course.deleteOne({ courseId: id });
        res.send('Success');
    } catch (err) {
        res.status(404).json({ message: err });
    }
})

module.exports = router