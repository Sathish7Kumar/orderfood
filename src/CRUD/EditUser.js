import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const [editUserData, seteditUserData] = useState({
        userName : "",
        mobileNumber  : "",
        emailID : ""
    })
    const {id} = useParams()
    const nav = useNavigate()
    useEffect(()=>{
        const getUserData = async () =>{
            try {
               const response = await axios.get("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users/"+id) 
               seteditUserData(response.data)
            } catch (error) {
               console.log(error); 
            }
        }
        getUserData()
    },[])
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
           await axios.put("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users/"+id,editUserData)
           alert("user Updated")
           nav('/users')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <h1>Fill the Form to Edit User : </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>UserName : </label> <br/>
          <input
            type="text"
            value={editUserData.userName}
            onChange={(e) => seteditUserData({...editUserData,userName:e.target.value})}
            placeholder="Enter UserName"
            required
          />
          <br/><br/>
          <label>Mobile Number : </label> <br/>
          <input
            type="text"
            value={editUserData.mobileNumber}
            onChange={(e) => seteditUserData({...editUserData,mobileNumber:e.target.value})}
            placeholder="Enter Mobile Number"
            required
          />
          <br/><br/>
          <label>Email ID : </label> <br/>
          <input
            type="email"
            value={editUserData.emailID}
            onChange={(e) => seteditUserData({...editUserData,emailID:e.target.value})}
            placeholder="Enter Email ID"
            required
          />
          <br/><br/>
          <button>Update</button>
        </form>
      </div>
    </>
  )
}

export default EditUser