// Hooks
import { useState } from "react";

export default function ({setLatestComment}) {
  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => {
    setNewComment(e.target.value)
    console.log(newComment)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
  };

  return (
    <section className="post-comment">
      <h2>Post Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={handleChange}></textarea>
        <button type="submit">Post comment</button>
      </form>
    </section>
  );
}
