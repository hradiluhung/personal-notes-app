import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="note-app__main">
      <h1 className="note-app__not-found_title">The page is not found</h1>
      <Link className="note-app__not-found_button" to="/">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
