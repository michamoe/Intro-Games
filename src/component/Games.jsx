import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import useContentful from "../hooks/useContentful";
import NavBar from "./NavBar";
import React from "react";
import "./games.css";

function Games() {
  const [games, setGames] = useState();
  const { getContent } = useContentful();

  useEffect(() => {
    getContent("game", "fields.rating").then((response) => setGames(response));
  }, []);
  return (
    <>
      <NavBar />
      <div className="all">
        <h1 className="head">Indi + Retro Games</h1>
        {games
          ? games.items.map((game, key) => {
              return (
                <div className="games" key={key}>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <h2>{game.fields.name}</h2>
                    </div>
                    <div className="col d-flex justify-content-center">
                      <div className="published">{game.fields.published}</div>
                    </div>
                  </div>
                  <div className="row d-flex align-items-center">
                    <div className="col d-flex justify-content-center">
                      <div className="company">{game.fields.company} </div>
                    </div>
                    <div className="col">
                      <div className="rating">
                        <ProgressBar
                          key={"progress" + key}
                          now={game.fields.rating}
                          label={`Rating: ${game.fields.rating} / 100`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {game.fields.bilder?.map((bild, id, key) => (
                      <div
                        className="col d-flex justify-content-center"
                        key={"img" + id + key}
                      >
                        <div className="images">
                          <img src={bild.fields.file.url} />
                        </div>
                      </div>
                    ))}
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
