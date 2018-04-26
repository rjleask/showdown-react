import React, { Component } from "react";
import "./playingCard.css";
const PlayingCard = props => {
  return (
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
  );
};

export default PlayingCard;
