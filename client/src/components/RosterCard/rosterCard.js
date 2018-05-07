import React, { Component } from "react";
import "./rosterCard.css";
const RosterCard = props => {
  return (
    <div className="playingcard-box">
      <div className="roster-img-box">
        <p className="character-name roster-chr-name">
          {props.players.playerName}
        </p>
        <img className="rostercard-img" src={props.players.pic} />
        <span className="on-base">{props.players.onBase}</span>
      </div>
    </div>
  );
};

export default RosterCard;
