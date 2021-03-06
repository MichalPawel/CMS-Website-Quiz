const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    created: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('news', newsSchema);