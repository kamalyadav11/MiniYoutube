import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onInputChange = term => {
    //onInputChange will get the typed text passed as term
    this.setState({ text: term }); //we will set state of text to that term
    this.props.onSearchTermChange(term); //and calls the fn from index.js as prop and pass it that term
  };

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.text}
          onChange={e => this.onInputChange(e.target.value)} //on Change fn calls another fn onInputChange(with typed value)
        />
      </div>
    );
  }
}

export default SearchBar;
//A controlled component has its value set by state so its value chnages only when state changes
