import React, { Component } from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import { FaArchive, FaTrash } from "react-icons/fa";
import { showFormattedDate } from "../../utils/local-data";
import DeleteNoteModal from "../DeleteNoteModal/DeleteNoteModal";

import "./noteCard.css";

class NoteCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModalHandler = this.openModalHandler.bind(this);
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <>
        <div className="note-app__note">
          <div className="note-app__card">
            <div className="note-app__content">
              <Link
                to={`/note/${this.props.id}`}
                className="note-app__card-title"
              >
                {this.props.title}
              </Link>
              <p className="note-app__card-date">
                {showFormattedDate(this.props.createdAt)}
              </p>
              <p className="note-app__card-body">{this.props.body}</p>
            </div>
            <div className="note-app__card-btns">
              {!this.props.archived ? (
                <div
                  className="note-app__card-btn archive-btn"
                  onClick={() =>
                    this.props.onArchiveNoteEventHandler(this.props.id)
                  }
                >
                  <FaArchive size={14} />
                  Archive
                </div>
              ) : (
                <div
                  className="note-app__card-btn archive-btn"
                  onClick={() =>
                    this.props.onUnarchiveNoteEventHandler(this.props.id)
                  }
                >
                  <FaArchive size={14} />
                  Unarchive
                </div>
              )}

              <div
                className="note-app__card-btn delete-btn"
                onClick={this.openModalHandler}
              >
                <FaTrash size={14} />
                Delete
              </div>
            </div>
          </div>
        </div>

        {this.state.modalIsOpen && (
          <DeleteNoteModal
            noteId={this.props.id}
            openModalHandler={this.openModalHandler}
            onDeleteNoteEventHandler={() => {
              this.props.onDeleteNoteEventHandler(this.props.id);
              this.openModalHandler();
            }}
          />
        )}
      </>
    );
  }
}

NoteCard.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired,
  archived: Proptypes.bool.isRequired,
};

export default NoteCard;
