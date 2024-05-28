import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const FormValidation = () => {
  
    // pop up - usestate

  const [showPopUp, setshowPopUp] = useState(false);


  // input useState

  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  // error usestate

  const [nameErr, setnameErr] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");
  const [cnfPasswordErr, setcnfPasswordErr] = useState("");

  // button validation

  const valid =
    name !== "" &&
    mail !== "" &&
    password !== "" &&
    confirmPassword === password;

  // getting input , setting form validation errors

  const handleName = (e) => {
    const val = e.target.value;
    setname(val);
    setnameErr(val !== "" ? "" : "User Name is Required");
  };

  const handleEmail = (e) => {
    const val = e.target.value;
    setmail(val);
    setemailErr(val !== "" ? "" : "Mail is Required");
  };

  const handlePassword = (e) => {
    const val = e.target.value;
    setpassword(val);
    setpasswordErr(val !== "" ? "" : "Password is Required");
  };

  const handleConfirmPassword = (e) => {
    const val = e.target.value;
    setconfirmPassword(val);
    setcnfPasswordErr(val === password ? "" : "password does not match");
  };

  // handling Popup
  // initial false
  // showPopUp = false -> true -> false -> true -> f -> t
  const handlePopUp = () => {
    setshowPopUp(!showPopUp);
  };

  return (
    <>
      <div>
        {showPopUp ? (
          <>
            <form>
              <FaWindowClose
                style={{ color: "red", fontSize: "35px" }}
                onClick={handlePopUp}
              />
              <br /> <br />
              <input
                type="text"
                onChange={handleName}
                placeholder="Enter ur name"
              />
              <br />
              <p>{nameErr}</p>
              <input
                type="email"
                onChange={handleEmail}
                placeholder="Enter ur Email"
              />
              <br />
              <p>{emailErr}</p>
              <input
                type="password"
                onChange={handlePassword}
                placeholder="Enter ur Password"
              />
              <br />
              <p>{passwordErr}</p>
              <input
                type="password"
                onChange={handleConfirmPassword}
                placeholder="Confirm ur Password"
              />
              <br />
              <p>{cnfPasswordErr}</p>
              <button type="submit" disabled={!valid}>
                Sign UP
              </button>
            </form>
          </>
        ) : (
          <>
            <button onClick={handlePopUp}>Open SignUP Form</button>
          </>
        )}
      </div>
    </>
  );
};

export default FormValidation;
