import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "Your_API_key_here";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, data => {
      //This request takes some time basically a async request
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
