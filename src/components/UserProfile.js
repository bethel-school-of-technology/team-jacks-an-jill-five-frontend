import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
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
        userId: "",
        Fairs: []
    });

    const params = useParams();
    const { getCurrentUser } = useContext(UserContext)

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

            {user.Fairs.map((fairs, index) => {
                return (
                    <Card>
                        <Card.Header as="h5">{user.username}'s Fairs will display here.</Card.Header>
                        <Card.Body>
                            <Card.Title>{fairs.fairTitle}</Card.Title>
                            <Card.Text>
                                {fairs.fairDescription}
                            </Card.Text>
                            <Button variant="primary" href={`/fairdetails/${fairs.fairId}`}>Details</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>

    )
}

export default UserProfile;