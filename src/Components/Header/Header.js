import React from "react";
import { Link } from "react-router-dom";
import { FaArchive, FaStickyNote } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <div className="note-app__header">
      <Link to="/" className="note-app__header-logo">
        <FaStickyNote />
        Personal Notes
      </Link>
      <Link to="/archive" className="note-app__header-archive-btn">
        <FaArchive size={16} />
        Archive
      </Link>
    </div>
  );
};

export default Header;
