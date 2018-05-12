const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    headline: {
        type: String,
        unique: true
    },
   date: {
        type: String,
    },
    snippet: {
        type: String,
    },
    url: {
        type: String,
    },
});

const Article = mongoose.model("Article", ArticleSchema)
module.exports = Article;