import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import API from "../../utils/API.js";
import PlayingCard from "../../components/PlayingCard";
import RosterNavs from "../../components/RosterNavs";
const url = "http://localhost:3001/api/players";

class Game extends Component {
  constructor(props) {
    super(props);
    this.rosterClick = this.rosterClick.bind(this);
    this.state = { players: [] };
  }

  componentDidMount() {
    API.getInitialTeams().then(res => {
      this.setState({ players: res.data });
    });
  }
  rosterClick = () => {
    let rosterNav = document.querySelector(".navbar-fixed-top");
    rosterNav.classList.remove("disappear");
    rosterNav.classList.add("reappear");
  };
  render() {
    return (
      <div className="game-page-wrapper">
        <button className="show-roster" onClick={this.rosterClick}>
          Roster
        </button>
        <RosterNavs />
        <nav className="navbar navbar-default navbar-fixed-side navbar-fixed-side-right">
          <ul>
            <li>bill</li>
            <li>tim</li>
            <li>bob</li>
            <li>jim</li>
            <li>luke</li>
          </ul>
        </nav>
        <div className="base-paths-wrapper">
          <section className="flex-grid-1 top">
            <div className="base second" />
          </section>
          <section className="flex-grid-3">
            <div className="base third" />
            <div className="base mound" />
            <div className="base first" />
          </section>
          <section className="flex-grid-1">
            <div className="base home">
              <PlayingCard />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Game;
