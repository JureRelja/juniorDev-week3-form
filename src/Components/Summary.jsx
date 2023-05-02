import React from "react";

function Summary(props) {
  return (
    <div className="summary">
      {props.data.name && (
        <div>
          <p>Ime: {props.data.name}</p>
          <p>Email: {props.data.email}</p>
          <p>Adresa: {props.data.adress}</p>
          <p>Država: {props.data.country}</p>
          <p>Način plaćanja: {props.data.payment}</p>
        </div>
      )}
    </div>
  );
}

export default Summary;
