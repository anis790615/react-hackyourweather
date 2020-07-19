import React from "react";

function Alert({ isError, errorMessage }) {
  return <>{isError && <div className="error-message">{errorMessage}</div>}</>;
}

export default Alert;
