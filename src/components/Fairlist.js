import React from "react";
import FairContext from "../contexts/FairContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";

const Fairlist = () => {

let navigate = useNavigate();

  return (
    <FairContext.Consumer>
    {
      ({ fair }) => {
        return (
          <div>
            <h1>List of Fairs</h1>
            <Link to="/addfair">Add New fair</Link>
            {console.log(fair)}
              <div> 
                <Container fluid>
                  <Row xs={1} md={2} lg={4} className="g-4"  >
                  {fair.map((f, index) => {
                    return (
                        <Col lg={true}  >
                          <Card key={f.fairId} style={{ width: '18rem' }} onClick={() => {
                            navigate(`/fairdetails/${f.fairId}`)
                            }}>
                            <Card.Body>
                            <CardImg variant="top" src={f.fairImage} thumbnail/>
                            <Card.Title onClick={() => {
                              navigate(`/fairdetails/${f.fairId}`)
                              }}>
                              <h2>{index+1}. {f.fairTitle}</h2>                             
                            </Card.Title>
                              <Card.Text>
                              <div>
                                  <h5>{f.fairCity},{f.fairState}</h5>
                                  <p>{f.fairStartDate}-{f.fairEndDate}</p>
                              </div>
                              </Card.Text>
                              <Link to={`/fairdetails/${f.fairId}`} className="btn btn-primary mx-1">Details</Link>
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
