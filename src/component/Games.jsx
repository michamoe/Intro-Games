import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import React from "react";

function Games() {
  const [games, setGames] = useState();
  const { getContent } = useContentful();

  useEffect(() => {
    getContent("game").then((response) => setGames(response));
  }, []);

  if (!games) {
    return "Loading...";
  }

  return (
    <>
      <h1>Games</h1>
      <div>List of games here!</div>
      {games
        ? games.items.map((game, key) => {
            return (
              <div className="games" key={key}>
                <h2>{game.fields.name}</h2>
                <div>{game.fields.published}</div>
                <div>{game.fields.rating}</div>
              </div>
            );
          })
        : "No Results"}
    </>
  );
}

export default Games;
