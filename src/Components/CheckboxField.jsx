import React from "react";
import { useState } from "react";

function CheckboxField(props) {
  function handleCheckbox() {
    if (props.termsChecked) {
      props.setTermsError(true);
    } else {
      props.setTermsError(false);
    }
  }

  return (
    <div className="checkbox-field">
      <input
        type="checkbox"
        onChange={handleCheckbox}
        value={props.termsError}
      />
      <label>Prihvaćam uvjete narudžbe</label>
    </div>
  );
}

export default CheckboxField;
