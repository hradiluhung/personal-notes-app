import React, { Component } from "react";
import PropTypes from "prop-types";

import "./addNoteInput.css";
import FormButtons from "../FormButtons/FormButtons";

class AddNoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddNoteHandler(this.state);
  }

  render() {
    return (
      <form className="note-app__form" onSubmit={this.onSubmitEventHandler}>
        <input
          className="note-app__input"
          placeholder="Your Title is..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          className="note-app__input"
          placeholder="The note you want to write..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <FormButtons />
      </form>
    );
  }
}

AddNoteInput.propTypes = {
  onAddNoteHandler: PropTypes.func.isRequired,
};

export default AddNoteInput;
