import {useState, useEffect} from 'react'

import './App.css';
import Header from './components/Header.jsx'
import TopicsNav from './components/TopicsNav.jsx'
import Articles from "./components/Articles.jsx";

import { getArticles } from './utils/api'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles().then((result) => {
      setArticles(result)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <TopicsNav />
      <Articles articles={articles}/>
    </div>
  );
}

export default App;
