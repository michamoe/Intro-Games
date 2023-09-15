import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import useContentful from "../hooks/useContentful";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Search() {
  const { searchArchivedGames } = useContentful();
  const [results, setResults] = useState([]);
  useEffect(() => {
    searchArchivedGames("archivedGames")
      .then((response) => {
        let tempArr = [];
        response.items.map((element) => tempArr.push(element.fields.name));
        setResults(tempArr);
      })
      .then(() => {
        let tempArr = [];
        results.map((element) => tempArr.push(element.fields.name));
        setShowresults(tempArr);
      });
  }, []);

  const [search, setSearch] = useState("");
  const [showResults, setShowresults] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
  useEffect(() => {
    if (search.length >= 2) {
      setShowresults(filterItems(results, search));
    }
  }, [search]);

  return (
    <>
      <NavBar />
      <div className="gradient"></div>
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
        </div>
        <ListGroup className="searchresults">
          {search.length >= 2 ? (
            showResults.map((element, key) => (
              <ListGroupItem key={key}>{element}</ListGroupItem>
            ))
          ) : (
            <ListGroupItem key="0">No results</ListGroupItem>
          )}
        </ListGroup>
      </div>
    </>
  );
}

export default Search;
