import React from "react";

function EmailField(props) {
  return (
    <div className="input-field">
      <label>{props.type}</label>
      {props.children}
    </div>
  );
}

export default EmailField;
