import {useState, useEffect} from 'react'

import './App.css';
import Header from './components/Header.jsx'
import TopicsNav from './components/TopicsNav.jsx'
import Articles from "./components/Articles.jsx";

import { getArticles } from './utils/api'

function App() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles().then((result) => {
      setArticles(result)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <TopicsNav />
      <Articles articles={articles} isLoading={isLoading}/>
    </div>
  );
}

export default App;
