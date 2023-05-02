import React from "react";
import InputTemplate from "./InputTemplate";
import { useState } from "react";

function EmailField(props) {
  const [value, setValue] = useState("");

  function handleInput(event) {
    if (event.target.value.includes("@") === false) {
      props.setEmailError(true);
    } else {
      props.setEmailError(false);
      props.setData({ ...props.data, email: event.target.value });
    }
    setValue(event.target.value);
  }

  return (
    <InputTemplate type="Email">
      <input type="email" value={value} onChange={handleInput} />
      <span className={props.emailError ? "show" : "hide"}>
        Email mora sadržavati znak "@"
      </span>
    </InputTemplate>
  );
}

export default EmailField;
