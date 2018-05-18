import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import API from "../../utils/API.js";
import PlayingCard from "../../components/PlayingCard";
import RosterNavAway from "../../components/RosterNavAway";
import RosterNavHome from "../../components/RosterNavHome";
import Carousel from "nuka-carousel";
import ChooseCard from "../../components/ChooseCard";
import Scoreboard from "../../components/Scoreboard";
import Modal from "../../components/Modal";
const url = "http://localhost:3001/api/players";

class Game extends Component {
  constructor(props) {
    super(props);
    this.rosterClick = this.rosterClick.bind(this);
    this.choosePlayerOrder = this.choosePlayerOrder.bind(this);
    this.handleChoosePlayer = this.handleChoosePlayer.bind(this);
    this.state = {
      players: [],
      playersAway: [],
      pitchers: [],
      pitchersAway: [],
      order: 0,
      orderAway: 0,
      inning: 1,
      scoreHome: 0,
      scoreAway: 0,
      outs: 0,
      teamAtBat: "away",
      playerAtBat: "",
      choosePlayer: false,
      newGame: false,
      lineup: [],
      highlighted: "no-highlight",
      highlightedClass: ""
    };
  }

  componentDidMount() {
    API.getInitialTeams().then(res => {
      this.setState({ players: res.data, playersAway: res.data });
    });
    API.getPitchers().then(res => {
      this.setState({ pitchers: res.data, pitchersAway: res.data });
    });
  }
  rosterClick = () => {
    let rosterNav = document.querySelector(".navbar-fixed-top");
    rosterNav.classList.remove("disappear");
    rosterNav.classList.add("reappear");
  };
  rosterClickHome = () => {
    let rosterNav = document.querySelector(".navbar-fixed-bottom");
    rosterNav.classList.remove("disappear-home");
    rosterNav.classList.add("reappear-home");
  };
  startGame = () => {
    let newGame = document.querySelector(".start-game");
    newGame.innerHTML = "New Game";
    this.setState({
      order: 0,
      orderAway: 0,
      inning: 1,
      scoreHome: 0,
      scoreAway: 0
    });
  };
  scoreObject = {
    inningOne: 0,
    inningTwo: 0,
    inningThree: 0,
    inningFour: 0,
    inningFive: 0,
    inninxSix: 0,
    inningSeven: 0,
    inningEight: 0,
    inningNine: 0
  };
  // controls which players are added to the lineup and highlights
  // triggered in the rosterNav
  choosePlayerOrder = player => {
    this.setState({ highlighted: "no-highlight" });
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i].pic === player.target.src) {
        console.log(this.state.players[i]);
        let playerIndex = this.state.players.splice(i, 1);
        this.state.lineup.push(playerIndex[0]);
        console.log(this.state.lineup);
        this.setState({ choosePlayer: false });
      }
    }
  };
  checkPlayers = () => {
    if (this.state.teamAtBat === "away") {
      if (this.state.players[0] !== undefined) {
        return (
          <PlayingCard players={this.state.playersAway[this.state.orderAway]} />
        );
      }
    } else {
      if (this.state.players[0] !== undefined) {
        return <PlayingCard players={this.state.players[this.state.order]} />;
      }
    }
  };
  checkPitchers = () => {
    if (this.state.teamAtBat === "away") {
      if (this.state.pitchers[0] !== undefined) {
        return <PlayingCard players={this.state.pitchers[0]} />;
      }
    } else {
      if (this.state.pitchers[0] !== undefined) {
        return <PlayingCard players={this.state.pitchersAway[0]} />;
      }
    }
  };
  // highlights the lineup spot to be filled and changes state
  handleChoosePlayer(e) {
    console.log(e.target.classList[0]);
    this.setState({
      choosePlayer: true,
      highlightedClass: e.target.classList[0],
      highlighted: "highlight"
    });
  }
  render() {
    const options = this.state.players.map(r => (
      <div key={r.playerID} className="roster-choice-box">
        <ChooseCard action={this.choosePlayerOrder} players={r} />
      </div>
    ));
    return (
      <div className="game-page-wrapper">
        <Modal players={this.state.players} pitchers={this.state.pitchers} />
        {/* shows away roster */}
        <button className="show-roster" onClick={this.rosterClick}>
          Roster Away
        </button>
        {/* shows home roster */}
        <button className="show-roster-home" onClick={this.rosterClickHome}>
          Roster Home
        </button>
        {/* starts game */}
        <button className="start-game" onClick={this.startGame}>
          Start Game
        </button>
        {/* away team */}
        <RosterNavAway
          players={this.state.players}
          handler={this.handleChoosePlayer}
          highlight={this.state.highlighted}
          highlightedClass={this.state.highlightedClass}
          highlightedPlayer={this.state.lineup[this.state.lineup.length - 1]}
          newGame={this.state.newGame}
        />
        {/* home team */}
        <RosterNavHome
          players={this.state.players}
          handler={this.handleChoosePlayer}
          highlight={this.state.highlighted}
          highlightedClass={this.state.highlightedClass}
          highlightedPlayer={this.state.lineup[this.state.lineup.length - 1]}
          newGame={this.state.newGame}
        />
        <Scoreboard
          scoreAway={this.state.scoreAway}
          scoreHome={this.state.scoreHome}
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
            <div className="base mound">{this.checkPitchers()}</div>
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
