import React, { Component } from "react";
import "./cardBack.css";
const PitchingCardBack = props => {
  return (
    <div className="container-stats">
      <div className="stat-box">
        <p className="character-name">{props.players.playerName}</p>
        <p className="attributes">Control:{props.players.control}</p>
        <p className="attributes">IP:{props.players.IP}</p>
        <p className="attributes">Position:{props.players.position}</p>
        <p className="attributes">Cost:{props.players.cost}</p>
        <p className="attributes">OutGB:{props.players.outGB}</p>
        <p className="attributes">OutFB:{props.players.outFB}</p>
        <p className="attributes">OutPU:{props.players.outPU}</p>
        <p className="attributes">OutSO:{props.players.outSO}</p>
        <p className="attributes">Walk:{props.players.walk}</p>
        <p className="attributes">Single:{props.players.single}</p>
        <p className="attributes">Double:{props.players.double}</p>
        <p className="attributes">Homer:{props.players.homer}</p>
      </div>
    </div>
  );
};

export default PitchingCardBack;
