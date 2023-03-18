import React, { useContext,useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import "../components/AddFair.css";
import FairContext from "../contexts/FairContext";

function AddFair() {

    let navigate = useNavigate()
    let params = useParams()
    let { createFair, getFair } = useContext(FairContext)

    let [ fair, setFair] = useState({
        id: params.fairId,
        fairTitle: "",
        fairCity: "",
        fairState: "",
        fairZip: "",
        fairStartDate: "",
        fairEndDate: "",
        fairDescription: "",
        imageUrl: ""
    })

    // useEffect(() => {
    //     if (fairId === undefined) return
    //     async function fetch() {
    //         await getFair(id)
    //         .then((fair) => setFair(fair))
    //     }
    //     fetch()
    // }, [fairId])


    function handleChange(e) {
        setFair((preValue) => {
            return { ...preValue, [e.target.name]: e.target.value };
        });
    }
    
    function add() {
        if (fair.fairTitle !== "" && fair.fairCity !== "" && fair.fairState !== "" && fair.fairZip !== "" && fair.fairStartDate !== "" && fair.fairEndDate !== "" ) {
            return createFair(fair)
        } else {
            alert('You need to fill all fields except description & Image')
        }
    } 

    function handleSubmit(e) {
        e.preventDefault()
        add(fair).then(() =>  {
            navigate('/fairlist')
        }).catch(error => {
            if (error.response.status === 401) {
                console.log(error);
                navigate('')
            }else
            console.log(error);
            navigate('/signin');
        })

    }

    return(
        <div className="wrap-container">
            <div className="form-container">
                <h1>Add Event</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group classname= "mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Event Name Here" type="text" value={fair.fairTitle} name="fairTitle" onChange={handleChange}  />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Decription</Form.Label>
                    <Form.Control placeholder="Enter Description Here" type="text" value={fair.fairDescription} name="fairDescription"  onChange={handleChange}/>
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="Enter City Here" type="text" value={fair.fairCity} name="fairCity" onChange={handleChange} />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="Enter State Here" type="text" value={ fair.fairState} name="fairState" onChange={handleChange} />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder="Enter Zip Here" type="text" value={ fair.fairZip} name="fairZip" onChange={handleChange} />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>State Date</Form.Label>
                    <Form.Control placeholder="Enter Date Here" type="text" value={fair.fairStartDate} name="fairStartDate" onChange={handleChange} />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control placeholder="Enter Date Here" type="text" value={fair.fairEndDate} name="fairEndDate" onChange={handleChange} />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control placeholder="Enter Image URL Here" type="text" value={fair.imageUrl} name="imageUrl"  onChange={handleChange} />
                </Form.Group>

                <Button className="btn" variant="warning" type="submit" onClick={handleSubmit}>Add Fair Here</Button>
            </Form>
            </div>
        </div>

      
    );
};

export default AddFair;
