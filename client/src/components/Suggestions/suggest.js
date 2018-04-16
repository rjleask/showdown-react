import React, { Component } from "react";

const Suggestions = props => {
  const options = props.results.map(r => (
    <li key={r.playerID}>{r.playerName}</li>
  ));
  return <ul>{options}</ul>;
};

export default Suggestions;
