/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* eslint-disable */

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  //write your code here
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "wolf",
    "jirafe",
    "vampire",
    "unicorn",
    "kardashian",
    "bezzos"
  ];
  let action = [
    "stole",
    "ate",
    "torch",
    "shout at my",
    "stole my",
    "amputated my"
  ];
  let possession = [
    "soul",
    "work",
    "arm",
    "zquiglinpunch",
    "cerebelum",
    "shoe",
    "motivation"
  ];
  let where = [
    "at the office",
    "in the graaveyard",
    "at the bank",
    "on my way home"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
