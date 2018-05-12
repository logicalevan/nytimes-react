import React from "react";

const Article = props => (
<div className="panel panel-default">
    <div className ="panel-heading">
        <h3 className = "headline panel-title">{props.article.headline}</h3>
        <button onClick = {() => props.saveOrDelete(props.article)} className = {props.buttonText}>{props.buttonText}</button>
    </div>
  <div className="panel-body">
    {props.article.snippet}    
  </div>
  <div>
      <a href={props.article.url}>Visit full article</a>
    </div>
</div>
)

export default Article;