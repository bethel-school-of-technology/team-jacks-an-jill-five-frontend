import React, { useEffect, useState, useContext } from "react";
import FairContext from "../contexts/FairContext";
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Spinner } from "react-bootstrap";

const FairDetails = () => {

    let params = useParams();
    let navigate = useNavigate();

    let { getFair, deleteFair } = useContext(FairContext);

    let [fair, setFair] = useState({
        fairId: "",
        fairTitle: "",
        fairCity: "",
        fairState: "",
        fairZip: "",
        fairDescription: "",
        fairStartDate: "",
        fairEndDate: "",
        fairImage: "",
        fairWebsite: ""
    });
    
    useEffect(() => {
        async function fetch() {
            await getFair(params.fairId).then((fair) => setFair(fair))
        }
        fetch()
    }, [params.fairId]);
    
    return (

        <Card className="align-self-start w-25">
            <Card.Img variant="top" src={fair.fairImage} />
            <Card.Body>
                <Card.Title>{fair.fairTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{fair.fairCity}, {fair.fairState}</Card.Subtitle>
                <Card.Text>
                    <strong>Dates:</strong> <span>{fair.fairStartDate} - {fair.fairEndDate}</span>
                    <p>{fair.fairDescription}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FairDetails;