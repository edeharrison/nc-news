// Hooks
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Stylesheets
import "./App.css";

// Components
import Header from "./components/Header.jsx";
import Articles from "./components/Articles.jsx";
import SingleArticle from "./components/SingleArticle.jsx";

// Utils
import { getArticles } from "./utils/api";

function App() {
  const [articles, setArticles] = useState([]);
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((result) => {
      setIsLoading(true);
      setArticles(result);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Articles 
              articles={articles} 
              setSingleArticle={setSingleArticle} 
              isLoading={isLoading} 
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle
              singleArticle={singleArticle}
              setSingleArticle={setSingleArticle}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
