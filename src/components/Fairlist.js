import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import FairContext from "../contexts/FairContext";
import { Link, Outlet } from "react-router-dom";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";

const Fairlist = () => {
  return (
    <FairContext.Consumer>
      {({ fair }) => {
        return (
          <div>
            <h1>List of Fairs</h1>
            <Link to="/addfair">Add New fair</Link>
            {console.log(fair)}
            <div>
              <Container fluid>
                <Row className="justify-content-md-center">
                  {fair.map((f) => {
                    return (
                      <Col sm="auto">
                        <Card key={f.fairId} style={{ width: "18rem" }}>
                          <Card.Body>
                            <Card.Title>
                              <h2>{f.fairTitle}</h2>
                            </Card.Title>
                            <Card.Text>
                              <div>
                                <h4>{f.fairCity}</h4>
                                <p>{f.fairStartDate}</p>
                              </div>
                            </Card.Text>

                            <Link
                              to={`/fairdetails/${f.fairId}`}
                              className="btn btn-primary mx-1"
                            >
                              Details
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
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
