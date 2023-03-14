// import axios from "axios";
import { useEffect, useState } from "react";
import FairContext from "./FairContext";

export const FairProvider = (props) => {

    const [ fair, setFair ] = useState([]);
    const baseUrl = "http://localhost:3000/api/fairs/";

    function getAllFairs() {

    }

    function getFair(id) {
        
    }

    function createFair(fair) {        

}

    function updateFair(fair) {

    }

    function deleteFair(id) {

    }

    return (
        <FairContext.Provider value={{
            fair,
            getAllFairs,
            getFair,
            createFair,
            updateFair,
            deleteFair
        }}>
            { props.children }
        </FairContext.Provider>
    )
};