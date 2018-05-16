import React, { Component } from "react";
import "./playingCard.css";
const PlayingCard = props => {
  return (
    <div className="playingcard-box">
      <div className="img-box">
        <p className="character-name">{props.players.playerName}</p>
        <img className="playingcard-img" src={props.players.pic} />
        <span className="on-base">
          {props.players.onBase === undefined
            ? props.players.control
            : props.players.onBase}
        </span>
      </div>
    </div>
  );
};

export default PlayingCard;
