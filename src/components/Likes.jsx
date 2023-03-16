// Hooks
import { useState } from "react";

// Icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Utils
import { likeArticle } from "../utils/api.js";
import { unlikeArticle } from "../utils/api.js";

export default function ({ singleArticle }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLikeError, setIsLikeError] = useState(false);

  const handleLikeToggle = () => {
    setIsLikeError(false);
    // toggles between icons
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikeCount(1);
      likeArticle(singleArticle.article_id)
      .catch(() => {
        setLikeCount(0);
        setIsLikeError(true);
      });
    } else {
      setLikeCount(0);
      unlikeArticle(singleArticle.article_id)
      .catch(() => {
        setLikeCount(1);
        setIsLikeError(false);
      });
    }
  };

  return (
    <section className="likes">
      <p>
        {/* 
          I can see that this is the problem. likeCount +/- 1, and adds it to new singleArticle.votes (another +/- 1) 
          So it ++ 2 (like) or -- 2 (unlike)
          Instead of ++ (like) or -- (unlike)
          I can't figure out how to resolve it though so am going to come back to it
        */}
        <strong>{singleArticle.votes + likeCount} likes</strong>
      </p>
      <button className="like" onClick={handleLikeToggle}>
        {!isLiked ? <AiOutlineHeart /> : <AiFillHeart />}
      </button>
      {isLikeError && <p>Oops. That didn't work</p>}
    </section>
  );
}

// when setting votes
// setVotes((currVotes) => {
//    return currVotes += 1
// })

// don't OR comment

// add a catch (and maybe then)
