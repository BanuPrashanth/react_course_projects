"use strict";

var val = true,
    buttonName = "Show details";

var info = function info() {
    if (val == true && buttonName == "Show details") {
        val = false;
        buttonName = "Hide details";
    } else {
        val = true;
        buttonName = "Show details";
    }
    renderFull();
};

var renderFull = function renderFull() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "VISIBILITY TOGGLE!"
        ),
        React.createElement(
            "button",
            { onClick: info },
            buttonName
        ),
        React.createElement(
            "p",
            { hidden: val },
            "Details Which will be Hidden or Shown Depending upon user"
        )
    );
    ReactDOM.render(template, root);
};

var root = document.getElementById('app');

renderFull();
