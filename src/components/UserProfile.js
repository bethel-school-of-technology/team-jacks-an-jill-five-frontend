import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import FairContext from "../contexts/FairContext";
import {
    Button,
    ListGroup,
    Card
} from "react-bootstrap";

const UserProfile = () => {

    const [user, setUser] = useState({
        username: "",
        userEmail: "",
        userCity: "",
        userState: "",
        userReferral: "",
        userImage: "",
        userId: ""
    });

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
        fairWebsite: "",
        userId: ""
    });


    const params = useParams();
    const { getCurrentUser } = useContext(UserContext)
    const { getFair } = useContext(FairContext)


    useEffect(() => {
        async function fetch() {
            await getCurrentUser()
                .then((user) => setUser(user))
                .catch((error) => {
                    console.log(error);
                    window.alert("user not logged in");

                });
        }
        fetch()
    }, [params.userId]);

    useEffect(() => {
        async function fetch() {
            await getFair().then((fair) => setFair(fair))
        }
        fetch()
    }, [params.fairId]);

    console.log(user);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.userImage} />
                <Card.Body>
                    <Card.Title>Welcome, {user.username}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{user.userCity}, {user.userState}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header as="h5">{user.username}'s Fairs will display here.</Card.Header>
                <Card.Body>
                    <Card.Title>{fair.fairTitle}</Card.Title>
                    <Card.Text>
                        {fair.fairDescription}
                    </Card.Text>
                    <Button variant="primary" href={`/fairdetails/${fair.fairId}`}>Details</Button>
                </Card.Body>
            </Card>
        </>

    )
}

export default UserProfile;