import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function CityDetailed({ city, deleteHandle }) {
  const { id } = useParams();
  console.log(useParams());

  const history = useHistory();

  return (
    <>
      <button className="btn" onClick={() => history.goBack()}>
        Go Back
      </button>
      <h1>City</h1>
    </>
  );
}

export default CityDetailed;
