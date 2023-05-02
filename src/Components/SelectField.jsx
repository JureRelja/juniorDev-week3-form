import React from "react";
import InputTemplate from "./InputTemplate";

function SelectField(props) {
  function handleInput(event) {
    if (event.target.value === "none") {
      props.setCountryError(true);
    } else {
      props.setCountryError(false);
      props.setData({ ...props.data, country: event.target.value });
    }
  }

  return (
    <InputTemplate type="Država">
      <select onChange={handleInput} defaultValue="none">
        <option value="none">Odaberi državu</option>
        <option value="Hrvatska">Hrvatska</option>
        <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
        <option value="Srbija">Srbija</option>
      </select>
      <span className={props.countryError ? "show" : "hide"}>
        Morate Odabrati odgovarajuću državu
      </span>
    </InputTemplate>
  );
}

export default SelectField;
