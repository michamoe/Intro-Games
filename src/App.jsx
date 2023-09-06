import { useState, useEffect } from "react";
import useContentful from "./hooks/useContentful";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Start from "./component/Start";
import Games from "./component/Games";
import ArticleGames from "./component/ArticleGames";

function App() {
  const [marvel, setMarvel] = useState([]);
  const { getMarvel } = useContentful();

  useEffect(() => {
    getMarvel().then((response) => setMarvel(response));
  }, []);
  // console.log(marvel);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start marvel={marvel} />} />
        <Route path="/games" element={<Games marvel={marvel} />} />
        <Route path="/articles" element={<ArticleGames marvel={marvel} />} />
      </Routes>
    </div>
  );
}
export default App;
