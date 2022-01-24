const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: { type: 'string', require },
    quiz: [],
    createdBy: { type: 'string', require },
    courseId: { type: 'string', require }
}, {
    timestamps: true
})

module.exports = mongoose.model('courses', courseSchema); 