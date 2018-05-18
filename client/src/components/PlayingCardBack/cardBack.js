import React, { Component } from "react";
import "./cardBack.css";
const PlayingCardBack = props => {
  return (
    <div className="container-stats">
      <div className="stat-box">
        <p className="character-name">{props.players.playerName}</p>
        <p className="attributes">OnBase:{props.players.onBase}</p>
        <p className="attributes">Speed:{props.players.speed}</p>
        <p className="attributes">Position:{props.players.position}</p>
        <p className="attributes">Cost:{props.players.cost}</p>
        <p className="attributes">Fielding:{props.players.fielding}</p>
        <p className="attributes">outGB:{props.players.outGB}</p>
        <p className="attributes">outFB:{props.players.outFB}</p>
        <p className="attributes">outSO:{props.players.outSO}</p>
        <p className="attributes">Walk:{props.players.walk}</p>
        <p className="attributes">Single:{props.players.single}</p>
        <p className="attributes">Double:{props.players.double}</p>
        <p className="attributes">Triple:{props.players.triple}</p>
        <p className="attributes">Homer:{props.players.homer}</p>
      </div>
    </div>
  );
};

export default PlayingCardBack;
