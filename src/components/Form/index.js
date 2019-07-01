import React from "react";
import { Link } from "react-router-dom";
import Fieldset from "../Fieldset";
import Input from "../Input";
import Button from "../Button";
import "./styles.scss";

class Form extends React.Component {
  getDate() {
    const fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let año = fecha.getFullYear();

    dia = dia < 10 ? (dia = "0" + dia) : dia;
    mes = mes < 10 ? (mes = "0" + mes) : mes;

    const date = año + "/" + mes + "/" + dia;
    return date;
  }
  render() {
    const { date, mood, menssage } = this.props.selected;
    const { handleInputsValue, onClickCancel, onClickSave } = this.props;
    return (
      <form className="form__container">
        <Fieldset styles="date" title="Fecha">
          <Input
            label="date"
            name="date"
            title="Fecha"
            type="date"
            id="date"
            value={date}
            onChange={handleInputsValue}
          />
        </Fieldset>
        <Fieldset styles="mood" title="Estado">
          <div className="form__mood-container">
            <div className="form__mood-good">
              <Input
                label="mood"
                name="mood"
                title=":)"
                type="radio"
                id="good"
                value="good"
                onClick={handleInputsValue}
                checked={mood === "good"}
              />
            </div>
            <div className="form__mood-mad">
              <Input
                label="mood"
                name="mood"
                title=":("
                type="radio"
                id="bad"
                value="bad"
                onClick={handleInputsValue}
                checked={mood === "bad"}
              />
            </div>
          </div>
        </Fieldset>
        <Fieldset styles="menssage" title="Mensaje">
          <Input
            label="menssage"
            name="menssage"
            title="Mensaje"
            type="text"
            id="menssage"
            value={menssage}
            onChange={handleInputsValue}
          />
        </Fieldset>
        <Button type="button" text="Guardar" styles="save" onClick={onClickSave} />
        <Link to="/">
          <Button type="button" text="Cancelar" styles="cancel" onClick={onClickCancel} />
        </Link>
      </form>
    );
  }
}

export default Form;
