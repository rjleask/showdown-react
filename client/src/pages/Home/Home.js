import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {
    members: []
  };
  componentDidMount() {}
  render() {
    return (
      <div className="page-wrapper">
        <form className="search-form">
          <div>
            <input className="search-bar" type="text" placeholder="search" />
            <button className="btn btn-default">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Home;
