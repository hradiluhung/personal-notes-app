import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import PropTypes from "prop-types";
import "./notes.css";

const Notes = ({
  notes,
  onDeleteNoteEventHandler,
  onArchiveNoteEventHandler,
  onUnarchiveNoteEventHandler,
}) => {
  return (
    <div className="note-app__notes">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            {...note}
            onDeleteNoteEventHandler={onDeleteNoteEventHandler}
            onArchiveNoteEventHandler={onArchiveNoteEventHandler}
            onUnarchiveNoteEventHandler={onUnarchiveNoteEventHandler}
          />
        ))
      ) : (
        <div className="note-app__empty">No notes yet</div>
      )}
    </div>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteNoteEventHandler: PropTypes.func.isRequired,
};

export default Notes;
