import React from "react";
import InputTemplate from "./InputTemplate";
import { useState } from "react";

function AdressField(props) {
  const [value, setValue] = useState("");

  function handleInput(event) {
    if (event.target.value.length >= 5) {
      props.setAdressError(false);
      props.setData({ ...props.data, adress: event.target.value });
    } else {
      props.setAdressError(true);
    }
    setValue(event.target.value);
  }

  return (
    <InputTemplate type="Adresa">
      <input type="text" value={value} onChange={handleInput} />
      <span className={props.adressError ? "show" : "hide"}>
        Adresa mora sadržavati minimalno 5 znakova
      </span>
    </InputTemplate>
  );
}

export default AdressField;
