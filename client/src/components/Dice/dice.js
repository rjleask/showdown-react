import React, { Component } from "react";

class Dice extends Component {
  state = {};
  animateRoll = () => {
    let randomNumber = function(low, high) {
      return Math.floor(Math.random() * (1 + high - low)) + low;
    };

    let cube = document.getElementById("cube");
    let outcome = document.getElementById("outcome");
    let outcomeText = document.getElementById("text");
    let messageDelay; //timer
    let fadeout; //timer
    let messages = [
      "Your Bard was killed",
      "You smote the orc",
      "You escaped the Ice Dragon",
      "Lightning Bolt succeeded",
      "Critical hit",
      "You are Lawful Evil",
      "You fell into the Well of Sorrows",
      "You found the Goblet of Endless Grog",
      "You encountered a Harpy",
      "Charisma + 10",
      "You lose 11 Hit Points",
      "You disarmed the trap",
      "Plate Mail + 3",
      "14 Damage",
      "Spell failure",
      "Backstab successful",
      "Your wand broke",
      "Surprise Attack",
      "You broke through the door",
      "You turned to stone"
    ];
    let showFace = function() {
      let face = randomNumber(1, 20);
      //if not already at this number
      if (cube.className !== "show-" + face) {
        cube.className = "show-" + face;
        //delay for spin to finish
        messageDelay = setTimeout(function() {
          //show message
          outcomeText.innerHTML = messages[face - 1];
          outcome.className = "show";
          //display message then fade out
          fadeout = setTimeout(function() {
            //hide message
            outcome.className = "";
          }, 2000);
        }, 1000);
      } else {
        //repeat number, try again
        return showFace();
      }
    };
    document.getElementById("roll").addEventListener(
      "click",
      function() {
        //fade message
        outcome.className = "";
        //clear timers if they are there
        if (typeof messageDelay === "number") {
          clearTimeout(messageDelay);
          clearTimeout(fadeout);
        }
        showFace();
      },
      false
    );
  };
  render() {
    return (
      <div>
        <section className="cube-container">
          <div id="cube" className="show-1">
            <figure className="face01">1</figure>
            <figure className="face02">2</figure>
            <figure className="face03">3</figure>
            <figure className="face04">4</figure>
            <figure className="face05">5</figure>
            <figure className="face06">6</figure>
            <figure className="face07">7</figure>
            <figure className="face08">8</figure>
            <figure className="face09">9</figure>
            <figure className="face10">10</figure>
            <figure className="face11">11</figure>
            <figure className="face12">12</figure>
            <figure className="face13">13</figure>
            <figure className="face14">14</figure>
            <figure className="face15">15</figure>
            <figure className="face16">16</figure>
            <figure className="face17">17</figure>
            <figure className="face18">18</figure>
            <figure className="face19">19</figure>
            <figure className="face20">20</figure>
          </div>
        </section>
        <section id="buttons">
          <input type="button" name="roll" value="Roll it!" id="roll" />
        </section>
        <section id="outcome">
          <div id="text">fill me up</div>
        </section>
      </div>
    );
  }
}
export default Dice;
