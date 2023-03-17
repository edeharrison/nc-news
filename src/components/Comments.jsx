// Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Icons
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

// Utils
import { getComments } from "../utils/api";

// refactor to use props, instead of passing all individual props
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
        // refactor at some point (this date-formatting code exists in 2 other components)
        const date = new Date(comment.created_at);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const created_at = `${day}/${month + 1}/${year}`;

        return (
          <li key={comment.comment_id}>
            <p>
              <strong>{comment.author}</strong>
              {created_at}
            </p>
            <p>{comment.body}</p>
            <p>
              <AiOutlineLike />
              {comment.votes}
              <AiOutlineDislike />
            </p>
          </li>
        );
      })}
    </ul>
  );
}
