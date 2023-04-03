import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import FairContext from '../contexts/FairContext';
import UserContext from './../contexts/UserContext';
import { Button, Form, Col} from 'react-bootstrap';

const EditFair = () => {

    let params = useParams()
    let [ editFair, seteditFair ] = useState({
        id: params.fairId,
        fairTitle: "",
        fairCity: "",
        fairState: "",
        fairZip: "",
        fairStartDate: "",
        fairEndDate: "",
        fairDescription: "",
        fairImage: "",
    
    });
  
    let navigate = useNavigate();
    let { updateFair, getFair, deleteFair } = useContext(FairContext);
    let { getCurrentUser } = useContext(UserContext);
    // let { id, } = editFair
    let fairId = params.fairId;

    useEffect(() => {
        if (fairId === undefined) return
        async function fetch() {
            await getFair(fairId)
            .then((updateFair) => seteditFair(updateFair))
        }
        fetch()
        }, [fairId])


    function handleChange(event) {
        seteditFair((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        });
    }

    function update() {
        console.log(update)
        return editFair(updateFair)
    }

    function handleDelete(id) {
        deleteFair(id)
        navigate('/fairlist')
      }


    function handleSubmit(event) {
        event.preventDefault();
        update().then((updateFair) => {
            <alert>You have update this Fair listing!</alert>
            navigate('/fairlist');
        }).catch(error => {
           if (error.response.status === 401) {
          console.log(error);
          alert('You need to sign in');
          navigate("/signin");
        }  else if (error.response.status === 403) {
          console.log(error);
          alert('You don\'t have rights for this action');
          // navigate("/signin");
        } else {
        console.log(error);
        alert('Error: ' + error)
        }
        });
    }

    return (
        <div>
          {/* Navbar  */}
          {/* <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home"><img className="logo" src="/images/logo.jpeg" alt=""/></Navbar.Brand>
              <Navbar.Brand href="#home">Reaction Shop</Navbar.Brand>
                  <nav>
                      <Link to="/reactions/profile/:id">{getUser.username}</Link>
                      <span> | </span>
                      <Link to="/Logout">LogOut</Link>
                      <span> | </span>
                      <Link to="/reactions">All Reacions</Link>
                      <hr></hr>
                  </nav>
                  <Image src="/images/login-icon.png" className="ms-3" height="40" roundedCircle />
          </Container>
        </Navbar> */}

        <div className="wrap-container">
      <div className="form-container">
        <h1>Edit Event</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group classname="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Event Name Here"
              type="text"
              value={editFair.fairTitle}
              name="fairTitle"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Decription</Form.Label>
            <Form.Control
              placeholder="Enter Description Here"
              type="text"
              value={editFair.fairDescription}
              name="fairDescription"
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Enter City Here"
              type="text"
              value={editFair.fairCity}
              name="fairCity"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder="Enter State Here"
              type="text"
              value={editFair.fairState}
              name="fairState"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="Enter Zip Here"
              type="text"
              value={editFair.fairZip}
              name="fairZip"
              onChange={handleChange}
            />
          </Form.Group>
          </Row>

          <Row classname="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={editFair.fairStartDate}
              name="fairStartDate"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={editFair.fairEndDate}
              name="fairEndDate"
              onChange={handleChange}
            />
          </Form.Group>
          </Row>
          <Form.Group classname="mb-3">
            <Form.Label>Fair Website</Form.Label>
            <Form.Control
              placeholder="Enter Fair URL here"
              type="text"
              value={editFair.fairWebsite}
              name="fairWebsite"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder="Enter Image URL Here"
              type="text"
              value={editFair.fairImage}
              name="fairImage"
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="btn"
            variant="warning"
            type="submit"
            onClick={handleSubmit}
          >
            Edit Event
          </Button>
          <Button
            className="btn"
            variant="warning"
            type="submit"
            onClick={handleDelete.bind(this, editFair.id)}
          >
            Delete Event
          </Button>
        </Form>
      </div>
    </div>


        </div>
    )
};

export default EditFair;