import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Notes from "../Components/Notes/Notes";
import SearchBar from "../Components/SearchBar/SearchBar";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";

function ArchiveWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Archive defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class Archive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onUnarchiveNoteEventHandler =
      this.onUnarchiveNoteEventHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteNoteEventHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onUnarchiveNoteEventHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <div>
        <div className="note-app__main">
          <h1 className="note-app__title">Archived Notes</h1>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <Notes
            notes={notes}
            onDeleteNoteEventHandler={this.onDeleteNoteEventHandler}
            onUnarchiveNoteEventHandler={this.onUnarchiveNoteEventHandler}
          />
        </div>
      </div>
    );
  }
}

Archive.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchiveWrapper;
