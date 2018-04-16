import React, { Component } from "react";
import API from "../../utils/API.js";
import Suggestions from "../Suggestions";

class Search extends Component {
  state = {
    query: "",
    results: []
  };
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  getInfo = () => {
    API.searchPlayers(this.state.query)
      .then(res => {
        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="search-form">
        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="search"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <Suggestions results={this.state.results} />
          {/* <p>{this.state.query}</p> */}
        </div>
      </form>
    );
  }
}

export default Search;
