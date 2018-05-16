import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API.js";
import Search from "../../components/Search";
const url = "http://localhost:3001/api/players";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePitcherAdd = this.handlePitcherAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      players: [],
      showPlayerForm: false
    };
  }
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
  handlePitcherAdd() {
    this.setState({ showPlayerForm: true });
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = {};
    for (let element of form.elements) {
      if (element.tagName === "BUTTON") {
        continue;
      }
      data[element.name] = element.value;
    }
    console.log(data);
    API.addPlayer(data).catch(err => console.log(err));
  }
  render() {
    return (
      <div className="page-wrapper">
        <Search />
        <a href={url} onClick={this.handleClick}>
          <button className="btn btn-primary">Show Players</button>
        </a>
        <button className=" btn btn-primary" onClick={this.handlePitcherAdd}>
          Add Pitcher
        </button>
        {this.state.showPlayerForm ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="playerID">Player ID</label>
            <input type="text" id="playerID" name="playerID" />
            <br />
            <label htmlFor="playerName">Player Name</label>
            <input type="text" id="playerName" name="playerName" />
            <br />
            <label htmlFor="team">Team Name</label>
            <input type="text" id="team" name="team" />
            <br />
            <label htmlFor="control">Control</label>
            <input type="text" id="control" name="control" />
            <br />
            <label htmlFor="IP">Innings Pitched</label>
            <input type="text" id="IP" name="IP" />
            <br />
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" />
            <br />
            <label htmlFor="cost">Cost</label>
            <input type="text" id="cost" name="cost" />
            <br />
            <label htmlFor="outPU">Out Pop Up</label>
            <input type="text" id="outPU" name="outPU" />
            <br />
            <label htmlFor="outGB">Out GB</label>
            <input type="text" id="outGB" name="outGB" />
            <br />
            <label htmlFor="outFB">Out FB</label>
            <input type="text" id="outFB" name="outFB" />
            <br />
            <label htmlFor="outSO">out SO</label>
            <input type="text" id="outSO" name="outSO" />
            <br />
            <label htmlFor="walk">Walk</label>
            <input type="text" id="walk" name="walk" />
            <br />
            <label htmlFor="single">Single</label>
            <input type="text" id="single" name="single" />
            <br />
            <label htmlFor="double">Double</label>
            <input type="text" id="double" name="double" />
            <br />
            <label htmlFor="homer">Homer</label>
            <input type="text" id="homer" name="homer" />
            <br />
            <label htmlFor="pic">Picture</label>
            <input type="text" id="pic" name="pic" />
            <br />
            <button className="btn btn-default">Send Data!</button>
          </form>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Home;
