import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "../Button";

class Home extends React.Component {
  render() {
    console.log(this.props.local.sort((a, b) => a.date > b.date));
    return (
      <main className="page__main-container">
        <Link to="/form" className="button__add-container">
          <Button type="button" styles="add" text="+" />
        </Link>
        <ul className="page__list-container">
          {this.props.local.length ? (
            this.props.local.map(item => (
              <li className="page__list-card">{item.mood}</li>
            ))
          ) : (
            <p>No hay estados aún</p>
          )}
        </ul>
      </main>
    );
  }
}

export default Home;
