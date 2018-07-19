"use strict";

console.log("App.js is Running!!!");

//JSX - JAVASCRIPT XML

var template = React.createElement(
  "h1",
  null,
  "This is a JSX Template! Are the Changes Seen? Yes it's seen.."
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
