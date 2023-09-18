import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const music = "/loop.mp3";

function start() {
  let navigate = useNavigate();
  const goArticles = () => {
    let path = `/articles`;
    navigate(path);
  };
  const goGames = () => {
    let path = `/games`;
    navigate(path);
  };
  const goArchive = () => {
    let path = `/search`;
    navigate(path);
  };

  return (
    <>
      <div className="gradient"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <main className="start container">
        <div className="start">
          <div>
            <Button variant="warning" onClick={goArticles}>
              ARTICLES
            </Button>
          </div>
          <div>
            <Button variant="warning" onClick={goGames}>
              GAMELIST
            </Button>
          </div>
          <div>
            <Button variant="warning" onClick={goArchive}>
              ARCHIVE
            </Button>
          </div>
        </div>
        <div className="arcade">
          <div className="animation"></div>{" "}
          <div className="audio">
            <figure>
              <audio id="player" controls src={music} loop={true}></audio>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
}

export default start;
