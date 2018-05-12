import React, {Component} from "react";
import API from "../utils/API"
import Input from "./input.js"
import Article from "./Article.js"

class Search extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => {
            console.log(res.data)
            {const articleInfo = res.data.map(data => {
                return {
                    headline: data.headline.main,
                    snippet: data.snippet,
                    url: data.web_url
                }
            })
            this.setState({
                articles: articleInfo
            })}
        })
        .catch(err => console.log(err));
    };

    saveArticle = article => {
        console.log("save pressed")
        console.log(article.headline)
        const articleInfo = {
            headline: article.headline,
            snippet: article.snippet,
            url: article.web_url
        }
        API.saveArticle(articleInfo)
    }

    render(){
        return (
            <div>
                <div className = "well well-lg">
                    <form>
                    <Input
                        value = {this.state.topic}
                        onChange = {this.handleInputChange}
                        name = "topic"
                        placeholder = "Topic"
                        />
                    <Input
                        value = {this.state.startYear}
                        onChange = {this.handleInputChange}
                        name = "startYear"
                        placeholder = "Start Year"
                        />
                    <Input
                        value = {this.state.endYear}
                        onChange = {this.handleInputChange}
                        name = "endYear"
                        placeholder = "End Year"
                        />
                    <button onClick = {this.handleFormSubmit} className = "submit">Submit</button>
                    </form>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Discovered Articles</h3>
                    </div>
                    <div className = "panel-body">
                        {this.state.articles.map((article, index) => {
                            return (
                                <Article 
                                    key = {index} 
                                    article = {article}
                                    saveOrDelete = {this.saveArticle}
                                    buttonText = "Save"
                                    />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;