import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import React from "react";

function Games() {
  const [games, setGames] = useState([]);
  const { getContent } = useContentful();

  useEffect(() => {
    getContent("game").then((response) => setGames(response));
  }, []);

  return (
    <>
      <h1>Games</h1>
      <div>List of games here!</div>
    </>
  );
}

export default Games;
