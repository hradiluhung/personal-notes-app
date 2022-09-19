import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./FormButtons.css";

const FormButtons = () => {
  return (
    <div className="note-app__form-btns">
      <Link to="/" className="note-app__form-btn">
        <FaTimes size={16} />
      </Link>
      <button className="note-app__form-btn" type="submit">
        <FaCheck size={16} />
      </button>
    </div>
  );
};

export default FormButtons;
