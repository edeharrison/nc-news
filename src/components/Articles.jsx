// Hooks
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Components
import TopicsNav from "./TopicsNav.jsx";

// Utils
import { getArticles } from "../utils/api";

// Icons
import { AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai";
import { SlSpeech } from "react-icons/sl";

export default function Articles({
  articles,
  setArticles,
  setSingleArticle,
  isLoading,
  setIsLoading,
}) {
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
    <main className="articles">
      <TopicsNav />
      <ul className="cards">
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li key={article.article_id}>
                <img
                  src={article.article_img_url}
                  alt="article thumbnail image"
                />
                <div className="under-img">
                  <h2>{article.title}</h2>
                  {/* <p className="topic">{(article.topic)[0].toUpperCase() + (article.topic).slice(1)}</p> */}
                  <div className="stats">
                    <p>
                      <AiOutlineClockCircle />
                      {/* {article.created_at} */}
                      14/03/2023
                    </p>
                    <p>
                      <AiOutlineHeart />
                      {article.votes}
                    </p>
                    <p>
                      <SlSpeech />
                      {article.comment_count}
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
