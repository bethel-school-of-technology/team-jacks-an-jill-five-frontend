import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate, Link } from "react-router-dom";
import FairContext from "../contexts/FairContext";
import { useContext, useState, useEffect } from 'react'



function FairDetails() {

    let { getFair,  } = useContext(FairContext)
    // let [ product, setProduct ] = useState()
    // let params = useParams()
    // let navigate = useNavigate()

    // let { id, productName, description, price } = product
    
    // useEffect(() => {
    //     async function fetch() {
    //         await getProduct(params.productId)
    //         .then((product) => setProduct(product))
    //     }
    //     fetch()
    //     }, [params.productId])


    // function handleDeleteProduct(id) {
    //     deleteProduct(id)
    //     navigate('/products')
    //   }
    

    // return(
    //     <Card className="align-self-start w-25">
    //     {/* <Card.Img variant="top" src={require(`../node_modules/fake-avatars/avatars/${avatar}`).default} /> */}
    //     <Card.Body>
    //       <Card.Title>{productName}</Card.Title>
    //       <Card.Subtitle className="mb-2 text-muted">Price: ${price}</Card.Subtitle>
    //       <Card.Text>
    //         <strong>Description:</strong> <span>{description}</span>
    //       </Card.Text>
    //       <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
    //       <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
    //     </Card.Body>
    //   </Card>
    // )
}


export default FairDetails