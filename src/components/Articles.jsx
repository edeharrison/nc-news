export default function Articles({ articles }) {
  console.log(articles[0]);
  return (
    <ul className="articles">
        {articles.map((article) => {
            return (
              <li>
                <h2>{article.title}</h2>
                <p>{article.author}</p>
                <p>{article.topic}</p>
                <p>{article.created_at}</p>
                <p>{article.votes} likes</p>
                <p>{article.comment_count} comments</p>
                <img src={article.article_img_url} alt="article thumbnail image" />
                <button>Read</button>
              </li>
            );
        })}
      
      {/* <li>
        <h2>Lorum ipsum dolor sit amet</h2>
        <p>Ben Foster</p>
        <p>TV</p>
        <p>01/01/2021</p>
        <p>5 like</p>
        <p>102 comments</p>
        <div className="img"></div>
        <button>Read</button>
      </li> */}
    </ul>
  );
}
