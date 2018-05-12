const router = require("express").Router();
const axios = require("axios")
const path = require("path")
const articlesController = require("../controllers/articlesController")
const authKey = "a46da05d03e24597961ee5ca16cace61"

router.get("/api/v1/getarticles/:topic&:startYear&:endYear", (req,res) => {
    console.log("scraping")
    let searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + req.params.topic + "&begin_date=" + req.params.startYear + "0101"
    + "&end_date=" + req.params.endYear + "0101";
    let articles =[];
    axios({
        method: "get",
        url: searchURL
    }).then(function(result){ 
        articles = result.data.response.docs
        console.log(articles)
        res.json(articles)
    }).catch(function(err){
        throw err;
    })
   
})

router.post("/api/v1/newSaved", (req, res) => {
    articlesController.newSaved(req, res)
})

router.get("/api/v1/savedArticles", (req, res) => {
    console.log("bananas")
    articlesController.findSaved(req, res)
})

router.delete("/api/v1/deleteSaved/:id", (req, res) => {
    articlesController.deleteSaved(req, res)
})

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;