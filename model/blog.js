const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Blog = mongoose.model('myblog', BlogSchema);

module.exports = Blog;