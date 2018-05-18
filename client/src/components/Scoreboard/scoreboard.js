import React, { Component } from "react";
import "./scoreboard.css";
const Scoreboard = props => {
  return (
    <div className="score-board-box">
      <div className="team-box">
        <p>Inning</p>
        <p>Home</p>
        <p>Away</p>
      </div>
      <section className="inning-section inning-one">
        <div className="inning-box">
          <p className="inning-num">1</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-two">
        <div className="inning-box">
          <p className="inning-num">2</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-three">
        <div className="inning-box">
          <p className="inning-num">3</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-four">
        <div className="inning-box">
          <p className="inning-num">4</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-five">
        <div className="inning-box">
          <p className="inning-num">5</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-six">
        <div className="inning-box">
          <p className="inning-num">6</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-seven">
        <div className="inning-box">
          <p className="inning-num">7</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-eight">
        <div className="inning-box">
          <p className="inning-num">8</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section inning-nine">
        <div className="inning-box">
          <p className="inning-num">9</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home">0</p>
          <p className="score-display-away">0</p>
        </div>
      </section>
      <section className="inning-section run-total">
        <div className="inning-box">
          <p className="inning-num">R</p>
        </div>
        <div className="score-box">
          <p className="score-display-Home total">{props.scoreHome}</p>
          <p className="score-display-away total">{props.scoreAway}</p>
        </div>
      </section>
    </div>
  );
};

export default Scoreboard;
