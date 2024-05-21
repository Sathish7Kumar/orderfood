import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [userName, setuserName] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [emailID, setemailID] = useState("");

  const nav = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const newUser = {
        userName : userName,
        mobileNumber : mobileNumber,
        emailID : emailID
    }
    try {
        await axios.post("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users",newUser)
        alert("user Created Successfuly")
        nav('/users')
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
      <h1>Fill the Form to Create User : </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>UserName : </label> <br/>
          <input
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            placeholder="Enter UserName"
            required
          />
          <br/><br/>
          <label>Mobile Number : </label> <br/>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setmobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            required
          />
          <br/><br/>
          <label>Email ID : </label> <br/>
          <input
            type="email"
            value={emailID}
            onChange={(e) => setemailID(e.target.value)}
            placeholder="Enter Email ID"
            required
          />
          <br/><br/>
          <button>Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
