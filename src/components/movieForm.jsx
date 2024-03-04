import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <>
      <div>MovieForm {match.params.id}</div>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </>
  );
};

export default MovieForm;
