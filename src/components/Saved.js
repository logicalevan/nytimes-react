import React, {Component} from "react";
import API from "../utils/API"
import Article from "./Article.js"

class Saved extends Component {
    state = {
        savedArticles: []
    };

    componentWillMount() {
        this.loadSavedArticles()
    }

    deleteArticle = article => {
        console.log("delete pressed")
        const id = article._id
        API.deleteArticle(id).then(res =>
            this.loadSavedArticles()
        ).catch(err => console.log(err))
        }

    loadSavedArticles = () => {
        API.getSavedArticles()
        .then(res => {
                this.setState({
                    savedArticles: res.data
                })
                console.log(res.data)
                console.log(this.state.savedArticles)
            }
        ).catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className = "panel-body">
                {this.state.savedArticles.map((article, index) => {
                    return (
                        <Article 
                            key = {index} 
                            article = {article}
                            saveOrDelete = {this.deleteArticle}
                            buttonText = "Delete"
                            />
                    )
                })}
            </div>
        </div>
        )
    }
}

export default Saved