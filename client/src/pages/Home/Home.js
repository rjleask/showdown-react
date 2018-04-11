import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API.js";
const url = "http://localhost:3001/api/players";

class Home extends Component {
  state = {
    players: []
  };
  componentDidMount() {}
  handleClick() {
    API.getPlayers()
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }
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
        <a href={url} onClick={this.handleClick}>
          <button className="btn btn-primary">Show Players</button>
        </a>
      </div>
    );
  }
}
export default Home;
