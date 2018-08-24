import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";

const API_KEY = "AIzaSyBOUvaqNHMacCc9V0bvbinL_woM6gW3Aew";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".container"));
