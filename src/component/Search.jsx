import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import useContentful from "../hooks/useContentful";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import "./search.css";

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
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Container className="mt-5">
        <Row>
          <Col>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                name="search"
                size="lg"
                type="text"
                placeholder="Search"
                className="me-2 rounded-pill"
                value={search}
                onChange={handleChange}
              />
              <Button className="rounded-pill" variant="warning">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {search.length >= 2
              ? showResults.map((element, key) => (
                  <Card
                    border="warning"
                    style={{
                      width: "30rem",
                      marginBottom: "2rem",
                      marginTop: "1rem",
                    }}
                    key={key}
                  >
                    <Card.Header>Game</Card.Header>
                    <Card.Body>
                      <Card.Title>{element}</Card.Title>
                      <Card.Text>Missing infos</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              : ""}
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </>
  );
}

export default Search;
