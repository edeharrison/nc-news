// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import Comments from "./Comments.jsx";
import Likes from "./Likes.jsx";
import PostComment from "./PostComment.jsx";

// Icons
import { AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai";
import { SlSpeech } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

// Utils
import { getSingleArticle } from "../utils/api";

// refactor to use props, instead of passing all individual props
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
  }, []);

  const comment_count = articles.map((article) => {
    if (article.article_id === singleArticle.article_id) {
      return article.comment_count;
    }
  });

  // refactor at some point (this date-formatting code exists in 2 other components)
  const date = new Date(singleArticle.created_at);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const created_at = `${day}/${month + 1}/${year}`;

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className="single-article">
      <div className="padding">
        <section className="article">
          <h1>{singleArticle.title}</h1>
          <div className="stats">
            <p>
              <AiOutlineClockCircle />
              {created_at}
            </p>

            <p>
              <AiOutlineHeart />
              {singleArticle.votes}
            </p>
            <p>
              <SlSpeech />
              {comment_count}
            </p>
            <p>
              <CgProfile />
              {singleArticle.author}
            </p>
            {/* <p>{singleArticle.topic}</p> */}
          </div>
          <img
            src={singleArticle.article_img_url}
            alt="article thumbnail image"
          />
          <p>{singleArticle.body}</p>
        </section>
        <Likes
          singleArticle={singleArticle}
          setSingleArticle={setSingleArticle}
        />
        <PostComment singleArticle={singleArticle} />
        <Comments isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>
    </main>
  );
}
