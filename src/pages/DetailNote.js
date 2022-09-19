import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/local-data";

const DetailNote = () => {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <div className="note-app__main">
      <div className="note-app__detail-note">
        <h1 className="note-app__detail-note_title">{note.title}</h1>
        <p className="note-app__detail-note_date">
          {showFormattedDate(note.createdAt)}
        </p>
        <p className="note-app__detail-note_body">{note.body}</p>
      </div>
    </div>
  );
};

export default DetailNote;
