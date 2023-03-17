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
          // refactor at some point (this date-formatting code exists in 2 other components)
          const date = new Date(article.created_at);
          const day = date.getDate();
          const month = date.getMonth();
          const year = date.getFullYear();
          const created_at = `${day}/${month + 1}/${year}`;

          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <li>
                <img
                  src={article.article_img_url}
                  alt="article thumbnail image"
                />
                <div className="under-img">
                  <h2>{article.title}</h2>
                  <div className="stats">
                    <p>
                      <AiOutlineClockCircle />
                      {created_at}
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
