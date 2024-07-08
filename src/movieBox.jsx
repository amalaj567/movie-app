import React, { createContext, useEffect, useState } from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import NavBar from "./navBar";
import MoviePage from "./moviePage";
const newContext=createContext()
const MovieBox = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=7375b3162ed1bb2f24bb965386019997"
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  return (
    <>
    <newContext.Provider value={{movies, setMovies}}>
    <NavBar bg="dark" expand="lg" variant="dark"/>
    {movies.length > 0 ?
    (<div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MoviePage key={movieReq.id} {...movieReq}/>
          )}
            </div>
    </div>)
    :(<h2>Sorry !! No Movies Found</h2>)}
    </newContext.Provider>
    </>
  );
};

export default MovieBox;
export {newContext}