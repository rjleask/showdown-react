import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Game.css";
import API from "../../utils/API.js";
const url = "http://localhost:3001/api/players";

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="game-page-wrapper">
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
              <div className="playingcard-box">
                <div className="img-box">
                  <p className="character-name">Mookie Betts</p>
                  <img
                    className="img-responsive"
                    src="http://www4.pictures.zimbio.com/gi/Mookie+Betts+Pittsburgh+Pirates+v+Boston+Red+1PqwQ4CktQyl.jpg"
                  />
                  <span className="on-base">10</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Game;
