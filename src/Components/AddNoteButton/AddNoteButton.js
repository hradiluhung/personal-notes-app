import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import "./addNoteButton.css";

const AddNoteButton = () => {
  return (
    <Link to="/add-note" className="note-app__add-button">
      <FaPlus size={16} color="var(--bg-color)" />
    </Link>
  );
};

export default AddNoteButton;
