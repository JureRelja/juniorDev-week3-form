import React from "react";
import EmailField from "./EmailField";
import NameField from "./NameField";
import AdressField from "./AdressField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";
import Button from "./Button";
import { useState } from "react";

function Form(props) {
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [termsError, setTermsError] = useState(false);

  function handleSubmit() {
    if (
      !emailError &&
      !nameError &&
      !adressError &&
      !countryError &&
      !paymentError &&
      !termsError
    ) {
      alert("Uspješno ste naručili");
      props.setShowData(true);
    } else {
      alert("Molimo popunite sva polja i prihvatite uvjete narudžbe");
    }
  }

  return (
    <div className="form">
      <div className="personal-data">
        <h2>Osobni podatci</h2>
        <EmailField
          emailError={emailError}
          setEmailError={setEmailError}
          data={props.data}
          setData={props.setData}
        />
        <NameField
          nameError={nameError}
          setNameError={setNameError}
          data={props.data}
          setData={props.setData}
        />
        <SelectField
          countryError={countryError}
          setCountryError={setCountryError}
          data={props.data}
          setData={props.setData}
        />
        <AdressField
          adressError={adressError}
          setAdressError={setAdressError}
          data={props.data}
          setData={props.setData}
        />
      </div>
      <RadioField
        paymentError={paymentError}
        setPaymentError={setPaymentError}
        data={props.data}
        setData={props.setData}
      />
      <CheckboxField termsError={termsError} setTermsError={setTermsError} />
      <Button handleSubmit={handleSubmit} />
    </div>
  );
}

export default Form;
