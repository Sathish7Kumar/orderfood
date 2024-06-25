import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  // const [userName, setuserName] = useState("");
  // const [mobileNumber, setmobileNumber] = useState("");
  // const [emailID, setemailID] = useState("");

  const [mobilename, setmobilename] = useState("")
  const [image, setimage] = useState("")
  const [price, setprice] = useState("")
  const [desc, setdesc] = useState("")
  // const [rating, setrating] = useState({
  //   rate : "",
  //   count : ""
  // })
  const [rate, setrate] = useState("")
  const [count, setcount] = useState("")

  const nav = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const newProduct = {
        mobilename : mobilename,
        image : image,
        price : price,
        desc:desc,
        rating:{
          rate : rate,
          count : count
        }
    }
    try {
        await axios.post("https://mobileproducts.onrender.com/post",newProduct)
        alert("product Created Successfuly")
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
          <label>MobileName : </label> <br/>
          <input
            type="text"
            value={mobilename}
            onChange={(e) => setmobilename(e.target.value)}
            placeholder="Enter MobileName"
            required
          />
          <br/><br/>
          <label>Image : </label> <br/>
          <input
            type="text"
            value={image}
            onChange={(e) => setimage(e.target.value)}
            placeholder=""
            required
          />
          <br/><br/>
          <label>Price : </label> <br/>
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            placeholder=""
            required
          />
          <br/><br/>
          <label>Description : </label> <br/>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            placeholder=""
            required
          />
          <br/><br/>
          <label>Rating : </label> <br/>
          <input
            type="text"
            value={rate}
            onChange={(e) => setrate(e.target.value)}
            placeholder=""
            required
          />
          <br/><br/>
          <label>Count : </label> <br/>
          <input
            type="text"
            value={count}
            onChange={(e) => setcount(e.target.value)}
            placeholder=""
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
