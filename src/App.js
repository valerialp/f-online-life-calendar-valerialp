import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Form from "./components/Form";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      local: JSON.parse(localStorage.getItem('moods')) || [],
      selected: {
        date:  new Date().toISOString().slice(0, 10),
        menssage: "",
        mood: ""
      }
    };
    this.handleButtonClickSaveLocal = this.handleButtonClickSaveLocal.bind(
      this
    );
    this.handleInputsValue = this.handleInputsValue.bind(this);
    this.handleButtonClickCancel = this.handleButtonClickCancel.bind(this);
  }
  componentDidUpdate(){
    localStorage.setItem("moods", JSON.stringify(this.state.local));
  }
  handleInputsValue(e) {
    const { value, name } = e.currentTarget;
    this.setState(prevState => {
      return {
        selected: {
          ...prevState.selected,
          [name]: value
        }
      };
    });
  }

  handleButtonClickSaveLocal() {
    const mood = this.state.selected;
    const register = this.state.local;
    register.push(mood)
    console.log(register)
    this.setState({local: register},
    () => this.handleButtonClickCancel());
  }
  handleButtonClickCancel() {
    this.setState({
      selected: {
        date: "",
        menssage: "",
        mood: ""
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Home match={routerProps.match} local={this.state.local} />
            )}
          />
          <Route
            exact
            path="/form"
            render={routerProps => (
              <Form
                match={routerProps.match}
                selected={this.state.selected}
                handleInputsValue={this.handleInputsValue}
                onClickSave={this.handleButtonClickSaveLocal}
                onClickCancel={this.handleButtonClickCancel}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
