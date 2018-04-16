import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API.js";
import Search from "../../components/Search";
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
        <Search />
        <a href={url} onClick={this.handleClick}>
          <button className="btn btn-primary">Show Players</button>
        </a>
      </div>
    );
  }
}
export default Home;
