import React from "react";
import InputTemplate from "./InputTemplate";
import { useState } from "react";

function NameField(props) {
  const [value, setValue] = useState("");

  function handleInput(event) {
    if (event.target.value.length >= 3) {
      props.setNameError(false);
      props.setData({ ...props.data, name: event.target.value });
    } else {
      props.setNameError(true);
    }
    setValue(event.target.value);
  }

  return (
    <InputTemplate type="Ime">
      <input type="text" value={value} onChange={handleInput} />
      <span className={props.nameError ? "show" : "hide"}>
        Ime more sadržavati minimalno 3 slova
      </span>
    </InputTemplate>
  );
}

export default NameField;
