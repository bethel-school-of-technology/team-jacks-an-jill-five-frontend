import React from "react";
import { ListGroup } from "react-bootstrap/ListGroup";
import FairContext from "../contexts/FairContext";
import { Link, Outlet } from "react-router-dom";
import { Stack } from "react-bootstrap";

const Fairlist = () => {

  function list() {
    return fair.map((f) => {
      <ListGroup.Item key={f.fairId}>
        <div>
          <h2>{f.fairTitle} </h2>
          <p>{f.fairDescription}</p>
          <Link to={`/fairs/${f.fairId}`} key={f.fairId} >
          {f.fairState}
        </Link>

        </div>
      </ListGroup.Item>
    })
  }

  return(
      <div>
        <h1>List of Fairs</h1>
        <Stack direction="horizontal" gap={3}>
        <ListGroup className="align-self-start w-75">
          <FairContext.Consumer>
            {({fair}) => (
              list(fair)
            )}
          </FairContext.Consumer>
        </ListGroup>
        <Outlet />
        </Stack>
      </div>
    );
  }

export default Fairlist;