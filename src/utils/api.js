import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://be-nc-news-vhfv.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsAPI.get("/articles").then(({ data }) => {
    return data
  })
  .catch((error) => {
    console.log(error)
  })
};

export const getSingleArticle = (article_id) => {
  return ncNewsAPI
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getComments = (article_id) => {
  return ncNewsAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// can i merge likeArticle and unlikeArticle into one toggleLikeArticle?
export const likeArticle = (article_id) => {
  return ncNewsAPI
    .patch(`/articles/${article_id}`, {
      inc_vote: 1,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export const unlikeArticle = (article_id) => {
  return ncNewsAPI
    .patch(`/articles/${article_id}`, {
      inc_vote: -1,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const postComment = (newComment, article_id) => {
  return ncNewsAPI
    .post(`/articles/${article_id}/comments`, {
      username: "cooljmessy",
      body: newComment,
      article_id,
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};