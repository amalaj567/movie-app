import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Container, FormControl, Nav, Navbar } from "react-bootstrap";
import { newContext } from "./movieBox";

const NavBar = () => {
  const {movies, setMovies} = useContext(newContext);
  console.log('Movies:', movies);
  const [query, setquery] = useState("");

  
  const searchMovie = (e) => {
    e.preventDefault();
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=7375b3162ed1bb2f24bb965386019997&query=${query}`
        )
        .then((response) => {
          console.log(response.data.results);
          const filteredMovies = response.data.results.filter(movie => movie.poster_path);
          setMovies(filteredMovies);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setquery(e.target.value);
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home">MovieDb App</Navbar.Brand>
          <Navbar.Brand href="/home">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <form className="d-flex" autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={handleChange}
              ></FormControl>
              <Button variant="secondary" onClick={searchMovie}>
                Search
              </Button>
            </form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;