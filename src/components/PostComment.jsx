// Hooks
import { useState } from "react";

// Utils
import { postComment } from '../utils/api'

export default function ({ singleArticle }) {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => {
    setNewComment(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      postComment(newComment, singleArticle.article_id);
      setNewComment('')
    } 
  };

  return (
    <section className="post-comment">
      <h2>Add a comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={handleChange}></textarea>
        {newComment &&
        <button type="submit" className="comment-submit">Comment</button>
        }
      </form>
    </section>
  );
}
