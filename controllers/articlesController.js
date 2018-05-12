const db = require("../models")

module.exports = {
    findSaved: function(req, res ){
        db.Article.find({})
        .then(dbSaved => {
           res.json(dbSaved)
        })
    },

    newSaved: function(req, res){
        db.Article.create(
            {
                headline: req.body.headline,
                snippet: req.body.snippet,
                url: req.body.url
            }
        ).then(result => {
            res.json(result)
        }).catch(err => console.log(err))
    },

    deleteSaved: function(req, res){
        db.Article.deleteOne({
            _id: req.params.id
        }).then(result => {
            res.json(result)
        }).catch(err => {
            console.log(err)
        })
    }
}