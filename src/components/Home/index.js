import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Button from "../Button";
import good from "../../images/good.svg";
import bad from "../../images/bad.svg";

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
            this.props.local.map(item => {
              return (
                <li className="page__list-card">
                  <img
                    className="card-image"
                    src={item.mood === "good" ? good : bad}
                    alt={item.mood}
                  />
                  <p className="tooltiptext">{item.date}</p>
                  <p className="tooltiptext">{item.menssage}</p>
                </li>
              );
            })
          ) : (
            <p>No hay estados aún</p>
          )}
        </ul>
      </main>
    );
  }
}

export default Home;
