import React from "react";

function RadioField(props) {
  function handleCheckbox(event) {
    props.setData({ ...props.data, payment: event.target.value });
    props.setPaymentError(false);
  }

  return (
    <div className="radio-field">
      <h2>Način plaćanja</h2>
      <div className="option">
        <input
          type="radio"
          name="payment"
          value="Gotovina"
          onChange={handleCheckbox}
        />
        <label>Gotovina</label>
      </div>
      <div className="option">
        <input
          type="radio"
          name="payment"
          value="Kartica"
          onChange={handleCheckbox}
        />
        <label>Kartica</label>
      </div>
    </div>
  );
}

export default RadioField;
