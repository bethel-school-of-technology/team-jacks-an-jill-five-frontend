import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FairContext from '../contexts/FairContext';
import UserContext from './../contexts/UserContext';


const EditFair = () => {

    let params = useParams()
    let [ editFair, seteditFair ] = useState({
        id: params.id,
        message: "",
    });
  
    let navigate = useNavigate();
    let { updateFair, getFair } = useContext(FairContext);
    let { getUser } = useContext(UserContext);
    let { id, message} = editFair

    useEffect(() => {
        if (fairId === undefined) return
        async function fetch() {
            await getFair(id)
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


    function handleSubmit(event) {
        event.preventDefault();
        update().then((updateFair) => {
            <alert>You have update this coffee listing!</alert>
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
              value={fair.fairTitle}
              name="fairTitle"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Decription</Form.Label>
            <Form.Control
              placeholder="Enter Description Here"
              type="text"
              value={fair.fairDescription}
              name="fairDescription"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Enter City Here"
              type="text"
              value={fair.fairCity}
              name="fairCity"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder="Enter State Here"
              type="text"
              value={fair.fairState}
              name="fairState"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="Enter Zip Here"
              type="text"
              value={fair.fairZip}
              name="fairZip"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={fair.fairStartDate}
              name="fairStartDate"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={fair.fairEndDate}
              name="fairEndDate"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder="Enter Image URL Here"
              type="text"
              value={fair.fairImage}
              name="imageUrl"
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="btn"
            variant="warning"
            type="submit"
            onClick={handleSubmit}
          >
            Add Fair Here
          </Button>
        </Form>
      </div>
    </div>


        </div>
    )
};

export default EditFair;