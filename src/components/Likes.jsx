// Hooks
import { useState } from "react";

// Icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Utils
import { likeArticle } from '../utils/api.js'
import { unlikeArticle } from '../utils/api.js'

export default function ({ singleArticle, setSingleArticle }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    if (!isLiked) {
      
      setSingleArticle({...singleArticle})
      likeArticle(singleArticle.article_id)
      setIsLiked(true);
    } else {
      setIsLiked(false);
      setSingleArticle({ ...singleArticle, votes: singleArticle.votes - 1 });
      unlikeArticle(singleArticle.article_id);
    }
      // setUserVote(1)
      // likeArticle(singleArticle.article_id)
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
