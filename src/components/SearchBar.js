import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onInputChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default SearchBar;
//A controlled component has its value set by state so its value chnages only when state changes
