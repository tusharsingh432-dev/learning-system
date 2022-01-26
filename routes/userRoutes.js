const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

router.post('/register', async (req, res) => {
    const user = req.body;
    // console.log(user);
    const uniqueId = uuidv4();
    const newUser = new User({
        ...user,
        uniqueId
    });
    try {
        const response = await newUser.save();
        // console.log(response);
        res.send('Sucess');
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err });
    }
})

router.post('/login', async (req, res) => {
    const user = req.body;
    try {
        const response = await User.find({ ...user });
        if (response.length == 0) {
            throw "No user found"
        }
        // console.log(response[0]);
        const newUser = {
            name: response[0].name,
            email: response[0].email,
            isTeacher: response[0].isTeacher,
            createdAt: response[0].createdAt,
            updatedAt: response[0].updatedAt,
            uniqueId: response[0].uniqueId,
            passedCourses: response[0].passedCourses,
        }
        // console.log(newUser);
        res.send(newUser)
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: err });
    }
})

router.post('/passUser', async (req, res) => {
    const { userId, courseId } = req.body;
    console.log("passCalled");
    try {
        const user = await User.findOne({ uniqueId: userId });
        if (!user.passedCourses.includes(courseId)) {
            user.passedCourses.push(courseId);
            user.save();
        }
        res.send("Success");
    } catch (err) {
        res.status(404).json({ message: err });
        console.log(err);
    }
})

module.exports = router;