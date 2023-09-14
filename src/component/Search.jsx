import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import useContentful from "../hooks/useContentful";

function Search() {
  const { searchArchivedGames } = useContentful();
  const [results, setResults] = useState(null);
  useEffect(() => {
    searchArchivedGames("archivedGames").then((response) =>
      setResults(response)
    );
  }, []);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    //console.log(e.target.value);
    setSearch(e.target.value);
  };

  // TODO: filter results-Array "results" depending on user input

  return (
    <>
      <NavBar />
      <div className="articlebg">
        <div className="container">
          <div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleChange}
            />
          </div>
          {results ? (
            <>
              <div>Limit: 1000</div>
              {results.items.map((result, key) => (
                <div key={key} className="result">
                  {key + 1}. {result.fields?.name}
                </div>
              ))}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
