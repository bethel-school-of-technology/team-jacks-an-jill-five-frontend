import axios from "axios";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3000/api/users/";

    function createUser(username, password) {       
        // added the user email, city, state, zip and referral -- let's test to see if it connects now
        let user = { username, password, userEmail, userCity, userState, userZip, userReferral };

        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve (response.data));
            }
        );
    }

    function signInUser(username, password) {
        
    }

    return (
        <UserContext.Provider value={{
            createUser,
            signInUser
        }}>
            { props.children }
        </UserContext.Provider>
    )
}