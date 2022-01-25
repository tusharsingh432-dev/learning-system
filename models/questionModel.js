const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: { type: 'string', require },
    quizId: { type: 'string', require },
    courseId: { type: 'string', require },
    option1: { type: Object, require },
    option2: { type: Object, require },
    option3: { type: Object, require },
    option4: { type: Object, require },
    questionId: { type: 'string', require },
    marks: { type: Number, require }
}, {
    timestamps: true
})

module.exports = mongoose.model('questions', questionSchema); 