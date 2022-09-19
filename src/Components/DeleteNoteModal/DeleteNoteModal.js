import React from "react";
import PropTypes from "prop-types";

import "./DeleteNoteModal.css";

const DeleteNoteModal = ({
  noteId,
  openModalHandler,
  onDeleteNoteEventHandler,
}) => {
  return (
    <div className="note-app__modal">
      <div className="note-app__modal-content">
        <h2 className="note-app__modal-text">
          Are you sure want to delete that note?
        </h2>
        <div className="note-app__modal-actions">
          <button
            className="note-app__modal-action"
            onClick={() => onDeleteNoteEventHandler(noteId)}
          >
            Yes
          </button>
          <button className="note-app__modal-action" onClick={openModalHandler}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

DeleteNoteModal.propTypes = {
  noteId: PropTypes.string.isRequired,
  openModalHandler: PropTypes.func.isRequired,
  onDeleteNoteEventHandler: PropTypes.func.isRequired,
};

export default DeleteNoteModal;
