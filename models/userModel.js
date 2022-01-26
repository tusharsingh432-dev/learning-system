const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: 'string',
        require
    },
    email: {
        type: 'string', require
    },
    password: {
        type: 'string', require
    },
    isTeacher: {
        type: 'boolean',
        default: false,
        require
    },
    uniqueId: {
        type: 'string',
        require
    },
    passedCourses: []
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema);