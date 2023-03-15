// Hooks
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Comments from "./Comments.jsx";
import Likes from "./Likes.jsx";

// Utils
import { getSingleArticle } from "../utils/api";

export default function SingleArticle({
  articles,
  singleArticle,
  setSingleArticle,
  isLoading,
  setIsLoading,
}) {
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((result) => {
      setIsLoading(true);
      setSingleArticle(result);
      setIsLoading(false);
    });
  }, [singleArticle]);

  const comment_count = articles.map((article) => {
    if (article.article_id === singleArticle.article_id) {
      return article.comment_count;
    }
  });

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className="single-article">
      <section className="article">
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.author}</p>
        <p>{singleArticle.topic}</p>
        <p>{singleArticle.created_at}</p>
        <p>{singleArticle.votes} likes</p>
        <p>{comment_count} comments</p>
        <img
          src={singleArticle.article_img_url}
          alt="article thumbnail image"
        />
        <p>{singleArticle.body}</p>
      </section>
      <Likes singleArticle={singleArticle} />
      <Comments isLoading={isLoading} setIsLoading={setIsLoading} />
    </main>
  );
}
