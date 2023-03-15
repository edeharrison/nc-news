// Hooks
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import TopicsNav from "./TopicsNav.jsx";

// Utils
import { getArticles } from "../utils/api";

export default function Articles({ articles, setArticles, setSingleArticle, isLoading, setIsLoading }) {
  

  useEffect(() => {
    getArticles().then((result) => {
      setIsLoading(true);
      setArticles(result);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <TopicsNav />
      <ul className="articles">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h2>{article.title}</h2>
              <p>{article.author}</p>
              <p>{article.topic}</p>
              <p>{article.created_at}</p>
              <p>{article.votes} likes</p>
              <p>{article.comment_count} comments</p>
              <img
                src={article.article_img_url}
                alt="article thumbnail image"
              />
              <Link to={`/articles/${article.article_id}`}>
                <button onClick={() => setSingleArticle(article.article_id)}>
                  Read
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
