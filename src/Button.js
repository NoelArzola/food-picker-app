import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };
  }

  chooseRandom = (selections) => {
    const res = selections[Math.floor(Math.random() * selections.length)].name;
    this.setState({ result: res });
  };

  render() {
    return (
      <div>
        <div className="button__wrapper">
          <button
            onClick={() => this.chooseRandom(this.props.selections)}
            className="mdc button mdc-button--raised mdc-button--leading"
          >
            <span className="material-icons">fastfood</span>
            Choose For Me!
          </button>
        </div>
        <h1 id="resultElement">
          {this.state.result === ""
            ? "Click the button, my guy"
            : this.state.result}
        </h1>
      </div>
    );
  }
}

export default Button;
