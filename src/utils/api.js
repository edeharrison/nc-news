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
      return data
    })
}

export const likeArticle = (article_id) => {
  return ncNewsAPI
    .patch(`/articles/${article_id}`, {
      inc_vote: 1
    })
    .then(({ data }) => {
      return data
    })
}

export const unlikeArticle = (article_id) => {
  return ncNewsAPI
    .patch(`/articles/${article_id}`, {
      inc_vote: -1,
    })
    .then(({ data }) => {
      return data;
    });
};