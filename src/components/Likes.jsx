// Hooks
import { useState } from "react";

// Icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Utils
import { likeArticle } from '../utils/api.js'

export default function ({ singleArticle }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeToggle() {
    if (!isLiked) {
      setIsLiked(true);
      // FE rendering first
      //
      // update BE
      likeArticle(singleArticle.article_id)
      console.log(isLiked);
    } else {
      setIsLiked(false);
      console.log(isLiked);
    }
  }

  return (
    <section className="likes">
      <p>
        <strong>{singleArticle.votes} likes</strong>
      </p>
      <button className="like" onClick={handleLikeToggle}>
        {!isLiked ? <AiOutlineHeart /> : <AiFillHeart />}
      </button>
    </section>
  );
}
