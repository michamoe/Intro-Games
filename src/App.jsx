import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Start from "./component/Start";
import Games from "./component/Games";
import Search from "./component/Search";
import ArticleGames from "./component/ArticleGames";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/games" element={<Games />} />
        <Route path="/articles" element={<ArticleGames />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}
export default App;
