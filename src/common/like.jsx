import React from "react";

//Input Boolean
// Output onClick

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  // if true then it will the heart without adding -o
  if (!liked) {
    classes = classes + "-o";
  }

  return <i style={{cursor: "pointer"}} onClick={onClick} className={classes} aria-hidden="true"></i>;
};

export default Like;
