import React, { Component } from "react";
import "./choose.css";
const ChooseCard = props => {
  return (
    <div className="playingcard-box">
      <div className="choose-img-box">
        <p className="character-name">{props.players.playerName}</p>
        <img
          className="choose-img"
          onClick={props.action}
          src={props.players.pic}
        />
        <span className="on-base">{props.players.onBase}</span>
      </div>
    </div>
  );
};

export default ChooseCard;
