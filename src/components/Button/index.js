import React from "react";
import "./styles.scss";

class Button extends React.Component {
  render() {
    return (
      <button type={this.props.type} className={`btn btn-${this.props.styles}`} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;