import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from "react-router-dom";
import '../components/AddFair.css'
import FairContext from "../contexts/FairContext";

function AddFair (){

    let navigate = useNavigate()
    // let params = useParams()

    let [ fair, setFair] = useState({
        fairTitle: "",
        fairCity: "",
        fairState: "",
        fairStartDate: "",
        fairEndDate: "",
        fairDescription: "",
        imageUrl: ""
    })


    let  { createFair} = useContext(FairContext)
    // let { id, fairTitle, fairCity, fairState, fairDescription, fairStartDate, fairEndDate, imageUrl} = fair

    // useEffect(() => {
    //     if (fairId === undefined) return
    //     async function fetch() {
    //         await getFair(id)
    //         .then((fair) => setFair(fair))
    //     }
    //     fetch()
    // }, [fairId])

    function handleChange(e) {
        setFair((preValue) =>{
            return { ...preValue, [e.target.name]: e.target.value}
        })
    }

    function add() {
        if (fair.fairTitle !== "" && fair.fairCity !== "" && fair.fairState !== "" && fair.fairStartDate !== "" && fair.fairEndDate !== "" ) {
            return createFair(fair)
        } else {
            alert('You need to fill all fields except description & Image')
        }
    } 

    function onSubmit(e) {
        e.preventDefault()
        add(fair).then(() =>  {
            navigate('/fairlist')
        }).catch(error => {
            if (error.response.status == 401) {
                navigate('')
            }
            console.log(error);
            navigate('/signin');
        })
    }

    return(
        <div className="wrap-container">
            <div className="form-container">
                <h1>Add Event</h1>
            <Form onSubmit={onSubmit}>
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

                <Button className="btn" variant="warning" type="submit" onClick={onSubmit}>Add Fair Here</Button>
            </Form>
            </div>
        </div>
      
    );
};
export default AddFair;