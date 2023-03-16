// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Utils
import { getComments } from "../utils/api";

export default function Comments({ isLoading, setIsLoading }) {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(article_id).then((result) => {
      setIsLoading(true);
      setComments(result);
      setIsLoading(false);
    });
  }, [comments]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : comments.length === 0 ? (
    <h2>No comments</h2>
  ) : (
    <ul className="comments">
      <h2>{comments.length} comments</h2>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
            <p>{comment.votes} likes</p>
            <p>Like this post </p>
          </li>
        );
      })}
    </ul>
  );
}
