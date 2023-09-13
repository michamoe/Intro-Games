import { Button } from "react-bootstrap";
const music = "./src/assets/loop.mp3";

function start() {
  return (
    <>
      <div className="gradient"></div>
      <main className="container">
        <div className="start">
          <div>
            <Button>ARTICLES</Button>
          </div>
          <div>
            <Button>GAMELIST</Button>
          </div>
        </div>
        <div className="arcade">
          <div className="animation"></div>{" "}
          <div className="audio">
            <figure>
              <audio controls src={music} loop="true"></audio>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}

export default start;
