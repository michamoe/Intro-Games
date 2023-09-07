import { useState, useEffect } from "react";
import useContentful from "./hooks/useContentful";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./component/NavBar";
import Start from "./component/Start";
import Games from "./component/Games";
import ArticleGames from "./component/ArticleGames";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/games" element={<Games />} />
        <Route path="/articles" element={<ArticleGames />} />
      </Routes>
    </>
  );
}
export default App;
