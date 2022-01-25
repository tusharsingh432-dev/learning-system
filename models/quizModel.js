const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    name: { type: 'string', require },
    courseId: { type: 'string', require },
    totalMarks: { type: Number, require },
    passingMarks: {
        type: Number, require,
        validate: {
            validator: function (val) {
                return val <= this.totalMarks;
            },
            message: 'Passing marks Greater Than total marks'
        }
    },
    quizId: { type: 'string', require }
}, {
    timestamps: true
})

module.exports = mongoose.model('quiz', quizSchema); 