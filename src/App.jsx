import { useState, useEffect } from "react";
import useContentful from "./hooks/useContentful";
import "./App.css";

function App() {
  const [marvel, setMarvel] = useState([]);
  const { getMarvel } = useContentful();

  useEffect(() => {
    getMarvel().then((response) => setMarvel(response));
  }, []);
  console.log(marvel);
  return (
    <div>
      <h1>Test</h1>
      {marvel.map((item, index) => {
        return (
          <div key={index} className="marvel">
            <img src={item.heroImage.file.url} />
            <h3>{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default App;
