import React, { Component } from "react";
import "./rosterNavs.css";
import PlayingCard from "../PlayingCard";
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
            className={`lineup-1 b-order ${props.highlight}`}
            onClick={props.handler}
            placeholder="number1"
          >
            <div className="batting-number">1</div>
            {props.highlightedPlayer !== undefined ? (
              <PlayingCard players={props.highlightedPlayer} />
            ) : (
              ""
            )}
          </div>
          <div className="lineup-2 b-order">
            <div className="batting-number">2</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-3 b-order">
            <div className="batting-number">3</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-4 b-order">
            <div className="batting-number">4</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-5 b-order">
            <div className="batting-number">5</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-6 b-order">
            <div className="batting-number">6</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-7 b-order">
            <div className="batting-number">7</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-8 b-order">
            <div className="batting-number">8</div>
            {/* <PlayingCard /> */}
          </div>
          <div className="lineup-9 b-order">
            <div className="batting-number">9</div>
            {/* <PlayingCard /> */}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default RosterNavs;
