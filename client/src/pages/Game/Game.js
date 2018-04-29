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
    this.handleChoosePlayer = this.handleChoosePlayer.bind(this);
    this.state = { players: [], choosePlayer: false };
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
  checkPlayers = () => {
    if (this.state.players[0] !== undefined) {
      return <PlayingCard players={this.state.players[0]} />;
    }
  };
  handleChoosePlayer() {
    this.setState({ choosePlayer: true });
  }
  render() {
    const options = this.state.players.map(r => (
      // <div className="card-box" key={r.playerID}>
      //   <p>{r.playerName}</p>
      //   <div className="roster-img-box">
      //     <img className="img-roster-choice" src={r.pic} />
      //   </div>
      // </div>
      <div key={r.playerID} className="roster-choice-box">
        <ChooseCard players={r} />
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
