import React from "react";
import ListGroup  from "react-bootstrap/ListGroup";
import FairContext from "../contexts/FairContext";
import { Link, Outlet } from "react-router-dom";
import { Button, Card, Stack } from "react-bootstrap";

const Fairlist = () => {
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
                    {fair.map((f) => {
                        return (
                          <ListGroup >
                          <Card key={f.fairId} className="align-self-start w-75">
                            <Card.Body>
                            <Card.Title><h1>{f.fairTitle}</h1></Card.Title>
                            <Card.Text>
                            <div>
                                <h4>{f.fairCity}</h4>
                                <p>{f.fairStartDate}</p>
                            </div>
                            </Card.Text>
                            <Button><Link to={`/fairdetails/${f.fairId}`} className="btn btn-primary mx-1">Details</Link> </Button> 
                            </Card.Body>
                          </Card>
                          </ListGroup>
            
                        )
                    })}
                </div>
            </div>
            )
        }
    }
    </FairContext.Consumer>
);
}
  
  export default Fairlist;
