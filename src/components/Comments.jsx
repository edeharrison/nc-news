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
      //   console.log(comments[0].comment_id)
      setComments(result);
      setIsLoading(false);
    });
  }, [comments]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ul className="comments">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <h2>{comment.comment_id}</h2>
          </li>
        );
      })}
    </ul>
  );
}
