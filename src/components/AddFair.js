import React from "react";
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from "react-router-dom";
import '../AddFair.css';


function AddFair (){

    let navigate = useNavigate()
    let params = useParams()

    let [ fair, setFair] = useState({
        id: params.fairId,
        fairName: "",
        description: "",
        imageUrl: ""
    })


    function handleChange(e) {
        setFair((preValue) =>{
            return { ...preValue, [e.target.name]: e.target.value}
        })
    }

    function add() {

    }

    function handleSubmit(e) {
        e.preventDefault()
        add().then((fair) =>    
            navigate(`/fairlist/${fair.id}`)
        )
    }

    return(
        <div className="container">
            <div className="form-container">
                <h1>Add Event</h1>
            <Form>
                <Form.Group classname= "mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Event Name Here" type="text" name="productName" onChange={handleChange}/>
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Decription</Form.Label>
                    <Form.Control placeholder="Enter Description Here" type="text" name="productName"  onChange={handleChange}/>
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Enter Location Here" type="text" name="productName" onChange={handleChange}/>
                </Form.Group>
                <Form.Group classname= "mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control placeholder="Enter Image URL Here" type="text" name="productName"  onChange={handleChange}/>
                </Form.Group>
                <Button type="submit" onClick={handleSubmit}>Add Fair Here</Button>
            </Form>
            </div>
        </div>
      
    );
};
export default AddFair;