import { useState, useEffect } from "react";
import useContentful from "../hooks/useContentful";
import NavBar from "./NavBar";
import React from "react";
import './games.css';

function Games() {
  const [games, setGames] = useState();
  const { getContent } = useContentful();

  useEffect(() => {
    getContent("game").then((response) => setGames(response));
  }, []);
  console.log(games);
  return (
    <>
     <div className="all">
      <h1 className="head">Indi + Retro Games</h1>
      {games
        ? games.items.map((game, key) => {
            return (
              <div className="games" key={key}>
                <div className="content">
                  <h2>{game.fields.name}</h2>
                  <div className="published">{game.fields.published}</div>
                  <div className="company">{game.fields.company}</div>
                  <div className="rating">{game.fields.rating}</div>
                </div>
                <div className="images">
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
      </div>
    </>
  );
}

export default Games;
