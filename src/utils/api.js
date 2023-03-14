import axios from "axios";

const ncNewsAPI = axios.create({
  baseURL: "https://be-nc-news-vhfv.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsAPI.get("/articles").then(({ data }) => {
    return(data)
  });
};
