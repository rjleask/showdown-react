import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import API from "../../utils/API.js";
import PlayingCard from "../../components/PlayingCard";
import RosterNavs from "../../components/RosterNavs";
import Carousel from "nuka-carousel";
import ChooseCard from "../../components/ChooseCard";
const url = "http://localhost:3001/api/players";

class Game extends Component {
  constructor(props) {
    super(props);
    this.rosterClick = this.rosterClick.bind(this);
    this.choosePlayerOrder = this.choosePlayerOrder.bind(this);
    this.handleChoosePlayer = this.handleChoosePlayer.bind(this);
    this.state = {
      players: [],
      choosePlayer: false,
      lineup: [],
      highlighted: "no-highlight"
    };
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
  // controls which players are added to the lineup and highlights
  // triggered in the rosterNav
  choosePlayerOrder = player => {
    console.log(player.target.src);
    this.setState({ highlighted: "no-highlight" });
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].pic === player.target.src) {
        console.log(this.state.players[i]);
        let playerIndex = this.state.players.splice(i, 1);
        this.state.lineup.push(playerIndex[0]);
        this.setState({ choosePlayer: false });
      }
    }
  };
  checkPlayers = () => {
    if (this.state.players[0] !== undefined) {
      return <PlayingCard players={this.state.players[0]} />;
    }
  };
  // highlights the lineup spot to be filled and changes state
  handleChoosePlayer() {
    this.setState({ choosePlayer: true, highlighted: "highlight" });
  }
  render() {
    const options = this.state.players.map(r => (
      <div key={r.playerID} className="roster-choice-box">
        <ChooseCard action={this.choosePlayerOrder} players={r} />
      </div>
    ));
    return (
      <div className="game-page-wrapper">
        <button className="show-roster" onClick={this.rosterClick}>
          Roster
        </button>
        <RosterNavs
          players={this.state.players}
          handler={this.handleChoosePlayer}
          highlight={this.state.highlighted}
          highlightedPlayer={this.state.lineup[this.state.lineup.length - 1]}
        />
        {this.state.choosePlayer ? (
          <div className="roster-player-choices">
            <Carousel slidesToShow={3} slideWidth={0.6} cellSpacing={10}>
              {options}
            </Carousel>
          </div>
        ) : (
          ""
        )}
        <nav className="navbar navbar-default navbar-fixed-side navbar-fixed-side-right">
          <ul>
            <li>bill</li>
            <li>tim</li>
            <li>bob</li>
            <li>jim</li>
            <li>luke</li>
          </ul>
          <button className="btn btn-default btn-close-bullpen">Close</button>
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
            <div className="base home">{this.checkPlayers()}</div>
          </section>
        </div>
      </div>
    );
  }
}
export default Game;
