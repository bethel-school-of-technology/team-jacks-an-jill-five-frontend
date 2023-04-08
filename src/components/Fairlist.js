import React, { useEffect, useState, useContext } from "react";
import FairContext from "../contexts/FairContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import axios from "axios";
import "./Fairlist.css";

const Fairlist = () => {

let navigate = useNavigate();

let { searchFairs } = useContext(FairContext);

const [wordEntered, setWordEntered] = useState("");

const handleFilter = (event) => {
  const searchWord = event.target.value.toLowerCase();
  setWordEntered(searchWord);
};

// useEffect(() => {
//   const fetchFairs = async () => {
//     const res = await searchFairs(wordEntered)
//     .then((wordEntered) => setWordEntered(wordEntered))
//     setWordEntered(res.data);
//   };
//   if (wordEntered.length === 0 || wordEntered.length > 2) {
//   fetchFairs();
//   }
// }, [wordEntered]);

const submitSearch = (event) => {
  searchFairs(wordEntered);
}

  return (
    <FairContext.Consumer>
    {
      ({ fair }) => {
        return (
          <div>
              <h1>List of Fairs</h1>
            <div className="searchInputs">
              <input
                className="search"
                placeholder="Enter a Fair..."
                onChange={handleFilter}
              />
              <button onClick={submitSearch}>search</button>
            </div>
              <Link to="/addfair">Add New fair</Link>
            {/* <SearchBar placeholder="Enter a Book Name..." data={fair} /> */}
            {console.log(fair)}
              <div> 
                <Container fluid>
                  <Row xs={1} md={2} lg={3} xl={4} className="g-4"  >
                  {fair.map((f, index) => {
                    return (
                        <Col fluid id="listCol">
                          <Card key={f.fairId} id="fairlistCard" style={{ width: '18rem' }} onClick={() => {
                            navigate(`/fairdetails/${f.fairId}`) 
                            }}>
                            <Card.Body embed-responsive className="embed-responsive-4by3" >
                            <div className="divFairImg">
                            <Card.Img src={f.fairImage} className="img-top"/>
                            </div>
                            <Card.Title onClick={() => {
                              navigate(`/fairdetails/${f.fairId}`)
                              }}>
                              <h4 id="fairCardTitle">{f.fairTitle}</h4>                             
                            </Card.Title>
                              <Card.Text>
                              <div>
                                  <h5 id="fairCardLocation">{f.fairCity},{f.fairState}</h5>
                                  <p id="fairCardDates">{f.fairStartDate}-{f.fairEndDate}</p>
                              </div>
                              </Card.Text>
                              <div className="viewButton">
                              <Link to={`/fairdetails/${f.fairId}`} className="btn btn-md btn-outline-secondary mx-1" id="detailsButton">Details</Link>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                    )
                  })}
                </Row>
              </Container>
            </div>
          </div>
        );
      }}
    </FairContext.Consumer>
  );
};

export default Fairlist;
