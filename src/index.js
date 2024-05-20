import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2024, 5, 19, 6);
const hours = date.getHours();
let greetings;
let color = {
  color: "",
};
if (hours < 12) {
  greetings = "Good Morning";
  color.color = "red";
} else if (hours < 12) {
  greetings = "Good AfterNoon";
  color.color = "green";
} else {
  greetings = "Good Night";
  color.color = "blue";
}

ReactDOM.render(
  <h1 style={color}>{greetings}</h1>,
  document.getElementById("root")
);
