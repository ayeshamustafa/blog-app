import React from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="page-title">Edit Page</h1>
      <p>You are editing blog post with ID: {id}</p>
    </div>
  );
};

export default Edit;
