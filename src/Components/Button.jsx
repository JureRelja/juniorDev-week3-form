import React from "react";

function Button(props) {
  return (
    <div>
      <button type="submit" onClick={() => props.handleSubmit()}>
        Naruči
      </button>
    </div>
  );
}

export default Button;
