import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import React from "react";

function Games() {
  const [games, setGames] = useState();
  const { getContent } = useContentful();

  useEffect(() => {
    getContent("game").then((response) => setGames(response));
  }, []);
  console.log(games);
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
                <div>{game.fields.company}</div>
                <div>{game.fields.rating}</div>
                <div>
                  {game.fields.bilder?.map((bild, id, key) => (
                    <img key={key} src={bild.fields.file.url} />
                  ))}
                  {/* {game.fields.bilder?.map((bild, id, key) =>
                    id === 0 ? (
                      <img key={key} src={bild.fields.file.url} />
                    ) : (
                      <></>
                    )
                  )} */}
                </div>
              </div>
            );
          })
        : "No Results"}
    </>
  );
}

export default Games;
