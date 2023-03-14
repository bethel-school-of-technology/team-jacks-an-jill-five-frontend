import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from "react-router-dom";
import '../components/AddFair.css'
import FairContext from "../contexts/FairContext";

function AddFair (){

    let navigate = useNavigate()
    let params = useParams()

    let [ fair, setFair] = useState({
        id: params.fairId,
        fairName: "",
        location: "",
        description: "",
        imageUrl: ""
    })

    let  {getFair, createFair, updateFair} = useContext(FairContext)
    let { id, fairName, location, description, imageUrl} = fair

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getFair(id)
            .then((fair) => setFair(fair))
        }
        fetch()
    })

    function handleChange(e) {
        setFair((preValue) =>{
            return { ...preValue, [e.target.name]: e.target.value}
        })
    }

    function add() {
        if (id === undefined) {
            return createFair(fair)
        } else {
            return updateFair(fair)
        }
    }

    function onSubmit(e) {
        e.preventDefault()
        add().then((fair) =>    
            navigate(`/fairlist/${fair.id}`)
        )
    }

    return(
        <div className="wrap-container">
            <div className="form-container">
                <h1>Add Event</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group classname= "mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Event Name Here" type="text" value={fairName} name="fairName" onChange={handleChange}  />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Decription</Form.Label>
                    <Form.Control placeholder="Enter Description Here" type="text" value={description} name="description"  onChange={handleChange}/>
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Enter Location Here" type="text" value={location} name="location" onChange={handleChange} />
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control placeholder="Enter Image URL Here" type="text" value={imageUrl} name="imageUrl"  onChange={handleChange} />
                </Form.Group>

                <Button className="btn" variant="warning" type="submit" onClick={onSubmit}>Add Fair Here</Button>
            </Form>
            </div>
        </div>
      
    );
};
export default AddFair;