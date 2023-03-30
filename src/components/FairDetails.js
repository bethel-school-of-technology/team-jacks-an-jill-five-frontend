import React, { useEffect, useState, useContext } from "react";
import FairContext from "../contexts/FairContext";
import { useParams, useNavigate, Link } from 'react-router-dom';
//import { Card, Container, Spinner } from "react-bootstrap";
import CommentForm from '../components/CommentForm';
import CommentContext from "../contexts/CommentContext";
import { Container } from "react-bootstrap";

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
        <><div className="container padding">
            <div className="row text-center padding">
                <div className="col-12">
                    <h1 className="display-4">{fair.fairTitle}</h1>
                </div>
            </div>
        </div>
            <div className="container-fluid padding ">
                <div className="row padding">
                    <div className="col-lg-6 text-center">
                        <h4>{fair.fairCity}, {fair.fairState}</h4>
                    </div>
                    <div className="col-lg-6 text-center">
                        <h4>{fair.fairStartDate} - {fair.fairEndDate}</h4>
                    </div>
                </div>
                <div className="container-fluid py-3">
                    <div className="row padding">
                        <div className="col-lg-6 mx-auto">
                            <img src={fair.fairImage} id="fairImage" className="img-fluid justify-content-center" alt="fair" />
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <p id="fairDesc" className="justify-content-center">{fair.fairDescription}</p>
                            </div>
                            <div className="row">
                                <div className="container mb-2">
                                    <Link to={fair.fairWebsite} className="btn btn-secondary btn-sm text-center" target="_blank">Event site</Link>
                                </div>
                            </div>
                            <hr mb-3 />
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <h3 className="fairComment">Comments</h3>
                                </div>
                                <div className="container-fluid py-3" id="commentContainer">
                                    <div className="row py-1">
                                        <div className="col-12 mb-2">
                                            <CommentForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FairDetails;