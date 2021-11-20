import React from 'react';
import ReactDOM from 'react-dom';
import User from "./User.js";
import Breadcrumbs from './Breadcrumbs';

const [ideasState, setIdeaState] = React.useState(true)
function ideasClick() {
    setIdeaState(prevState => !prevState)
}

const [articlesState, setArticleState] = React.useState(false)
 function articlesClick() {
    setArticleState(prevState => !prevState)
}

const [staffState, setStaffState] = React.useState(false)
function staffClick() {
    setStaffState(prevState => !prevState)
}

export default function Header() {
    return (
        <header className="header">
            
            <div className="header--bar">
                <h4 {IdeaState ? className="highlightedHeader" : className="unhighlightedHeader"}>Ideas</h4>
                <h4 {ArticleState ? className="highlightedHeader" : className="unhighlightedHeader"}>Articles</h4>
                <h4 {staffState ? className="highlightedHeader" : className="unhighlightedHeader"}>Staff</h4>
            </div>
            <img 
                src="./Images/TID_logo_news.png" 
                className="header--image"
            />

            
        </header>
    )
}

/* TODOS:
 <Breadcrumbs className="breadcrumbs"/>
 <User className="user"/> */