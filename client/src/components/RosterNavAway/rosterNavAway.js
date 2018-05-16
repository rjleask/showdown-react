import React, { Component } from "react";
import "./rosterNavAway.css";
import RosterCard from "../RosterCard";
import Suggestions from "../Suggestions";
const RosterNavs = props => {
  let handleCloseRoster = () => {
    let nav = document.querySelector(".navbar-fixed-top");
    nav.classList.remove("reappear");
    nav.classList.add("disappear");
  };
  let handleOpenBullpen = () => {
    let navPen = document.querySelector(".navbar-fixed-side");
    navPen.classList.remove("hide-bullpen");
    navPen.classList.add("show-bullpen");
  };
  let handleHighlightedClass = className => {
    if (className == props.highlightedClass) {
      return props.highlight;
    } else {
      return "no-highlight";
    }
  };
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <button className="btn btn-default close-btn" onClick={handleCloseRoster}>
        Close
      </button>
      <button className="btn btn-default bullpen" onClick={handleOpenBullpen}>
        Sub/Bullpen
      </button>

      <div className="container">
        <section className="flex-grid-team">
          <div
            className={`lineupOne b-order ${handleHighlightedClass(
              "lineupOne"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number first">1</div>
            {props.players.length > 0 ? (
              <RosterCard players={props.players[0]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupTwo b-order ${handleHighlightedClass(
              "lineupTwo"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number second">2</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[1]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupThree b-order ${handleHighlightedClass(
              "lineupThree"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number third">3</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[2]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupFour b-order ${handleHighlightedClass(
              "lineupFour"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number fourth">4</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[3]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupFive b-order ${handleHighlightedClass(
              "lineupFive"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number fifth">5</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[4]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupSix b-order ${handleHighlightedClass(
              "lineupSix"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number sixth">6</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[5]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupSeven b-order ${handleHighlightedClass(
              "lineupSeven"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number seventh">7</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[6]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupEight b-order ${handleHighlightedClass(
              "lineupEight"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number eighth">8</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[7]} />
            ) : (
              ""
            )}
          </div>
          <div
            className={`lineupNine b-order ${handleHighlightedClass(
              "lineupNine"
            )}`}
            onClick={props.handler}
          >
            <div className="batting-number nineth">9</div>
            {props.players.length > 1 ? (
              <RosterCard players={props.players[8]} />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default RosterNavs;
