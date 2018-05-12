import axios from "axios";

export default {

    findArticles: function(topic, startYear, endYear) {
        return axios.get("/api/v1/getarticles/" + topic +"&" + startYear + "&" + endYear)
    },

    saveArticle: function(articleInfo){
        return axios.post("/api/v1/newSaved", articleInfo)
    },

    deleteArticle: function(id){
        return axios.delete("/api/v1/deleteSaved/" + id)
    },

    getSavedArticles: function(){
        return axios.get("/api/v1/savedArticles")
    }
}