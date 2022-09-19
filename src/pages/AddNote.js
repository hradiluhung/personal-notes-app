import React from "react";
import { useNavigate } from "react-router-dom";
import AddNoteInput from "../Components/AddNoteInput/AddNoteInput";
import { addNote } from "../utils/local-data";

const AddNote = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return (
    <div className="note-app__main">
      <h3 className="note-app__title">Add New Note</h3>
      <AddNoteInput onAddNoteHandler={onAddNoteHandler} />
    </div>
  );
};

export default AddNote;
