import React, { Fragment } from "react";

class Input extends React.Component {
  render() {
    return (
      <Fragment>
        <label htmlFor={this.props.name} className={`form__${this.props.label}-label`}>
          {this.props.title}
        </label>
        <input
          type={this.props.type}
          className={`form__${this.props.label}-input`}
          name={this.props.name}
          id={this.props.id}
          value={this.props.value}
          placeholder={this.props.placeholder}
          checked={this.props.checked}
          onClick={this.props.onClick}
          onChange={this.props.onChange}
        />
      </Fragment>
    );
  }
}

export default Input;