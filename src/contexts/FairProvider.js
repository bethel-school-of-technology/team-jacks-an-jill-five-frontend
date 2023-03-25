import axios from "axios";
import { useEffect, useState } from "react";
import FairContext from "./FairContext";

export const FairProvider = (props) => {
  const [fair, setFair] = useState([]);
  const baseUrl = "http://localhost:3000/api/fairs/";

  useEffect(() => {
    async function getFairs() {
      await getAllFairs();
    }
    getFairs();
  }, []);

  function getAllFairs() {
    return axios.get(baseUrl).then((response) => {
      setFair(response.data);
    });
  }

  function getFair(id) {
    return axios.get(`${baseUrl}/${id}`).then((response) => {
      return new Promise((resolve) => resolve(response.data)).catch(
        (error) => new Promise((_, reject) => reject(error.response.statusText))
      );
    });
  }

  function createFair(fair) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem("myFairToken")}`,
    };
    return axios
      .post(baseUrl, fair, { headers: myHeaders })
      .then((response) => {
        getAllFairs();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function updateFair(fair) {}

  function deleteFair(id) {}

  return (
    <FairContext.Provider
      value={{
        fair,
        getFair,
        createFair,
        updateFair,
        deleteFair,
      }}
    >
      {props.children}
    </FairContext.Provider>
  );
};
