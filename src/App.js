// Hooks
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Stylesheets
import "./App.css";

// Components
import Header from "./components/Header.jsx";
import Articles from "./components/Articles.jsx";
import SingleArticle from "./components/SingleArticle.jsx";

function App() {
  const [articles, setArticles] = useState([]);
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Articles
              articles={articles}
              setArticles={setArticles}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <SingleArticle
              articles={articles}
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
