import React, { useContext, useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FairContext from '../contexts/FairContext';
import UserContext from './../contexts/UserContext';
import { Button, Form, Col} from 'react-bootstrap';

const EditFair = () => {

  let navigate = useNavigate();
  let { updateFair, getFair, deleteFair } = useContext(FairContext);
  // let { getCurrentUser } = useContext(UserContext);
  let params = useParams()
  
  let [ changeFair, setChangeFair ] = useState({
    fairId: params.fairId,
    fairTitle: "",
    fairCity: "",
    fairState: "",
    fairZip: "",
    fairStartDate: "",
    fairEndDate: "",
    fairDescription: "",
    fairImage: "",
    
  });
  
  let fairId = params.fairId;


    useEffect(() => {
        async function fetch() {
            await getFair(fairId)
            .then((changeFair) => setChangeFair(changeFair))
        }
        if (fairId !== undefined) {
          fetch();
        }
        
        }, [fairId])


    function handleChange(event) {
      setChangeFair((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        });
    }

    function update() {
      if ( changeFair.fairTitle !== "" &&
      changeFair.fairCity !== "" &&
      changeFair.fairState !== "" &&
      changeFair.fairZip !== "" &&
      changeFair.fairStartDate !== "" &&
      changeFair.fairEndDate !== "" &&
      changeFair.fairWebsite !== "" &&
      changeFair.fairImage !== ""
      ) {
        return updateFair(changeFair)
      }
    }

    function handleDelete() {
        deleteFair(fairId).then(() => {
          navigate('/fairlist')
          console.log("Hey Bro!")
        }).catch(error => {
          console.log(error);
          alert('Error: ' + error)
        })
      }


    function handleSubmit(event) {
        event.preventDefault();
        update().then(() => {
            <alert>You have update this Fair listing!</alert>
            navigate(`/fairdetails/${fairId}`);
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
        <div>
        <Link to={`/fairdetails/${fairId}`} className="btn btn-warning mx-1">Back</Link>
        </div>
        <div className="wrap-container">
        <div className="form-container">
        <h1>Edit Event</h1>
        <Form>
          <Form.Group classname="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Event Name Here"
              type="text"
              value={changeFair.fairTitle}
              name="fairTitle"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Decription</Form.Label>
            <Form.Control
              placeholder="Enter Description Here"
              type="text"
              value={changeFair.fairDescription}
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
              value={changeFair.fairCity}
              name="fairCity"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>State</Form.Label>
            {/* <Form.Control
              placeholder="Enter State Here"
              type="text"
              value={changeFair.fairState}
              name="fairState"
              onChange={handleChange}
            /> */}
            <Form.Select  defaultValue="Choose..."
              value={changeFair.fairState}
              name="fairState"
              onChange={handleChange}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </Form.Select>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="Enter Zip Here"
              type="text"
              value={changeFair.fairZip}
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
              value={changeFair.fairStartDate}
              name="fairStartDate"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              placeholder="Enter Date Here"
              type="text"
              value={changeFair.fairEndDate}
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
              value={changeFair.fairWebsite}
              name="fairWebsite"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group classname="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder="Enter Image URL Here"
              type="text"
              value={changeFair.fairImage}
              name="fairImage"
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            className="btn"
            variant="warning"
            type="button"
            onClick={handleSubmit}
          >
            Edit Event
          </Button>
          <Button
            className="btn"
            variant="warning"
            type="button"
            onClick={handleDelete}
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