import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const MoviePage = ({title, poster_path, vote_average, release_date, overview}) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500";


    const [show, setShow]=useState(false);

    const handleSwitch=()=>setShow(!show);
  
    return(
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
              <img className="card-img-top" src={API_IMG+poster_path} />
              <div className="card-body">
                  <button type="button" className="btn btn-dark" onClick={handleSwitch} >View More</button>
                  <Modal show={show} onHide={handleSwitch}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}} src={API_IMG+poster_path} />
                      <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleSwitch}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        </div>
    )
}

export default MoviePage;