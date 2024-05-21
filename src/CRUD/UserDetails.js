import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const [users, setusers] = useState([])
    const nav = useNavigate()
    const {id} = useParams()
    const getUserRespose = async  () => {
        try {
            const response = await axios.get("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users/"+id)
            setusers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getUserRespose()
    },[])
    // console.log(users);

    const handleBack = () =>{
        nav('/users')
    }
  return (
    <>
    <h2>User Details </h2>

    <h3>User Name : {users?.userName}</h3>
    <h3>Mobile Number  : {users?.mobileNumber}</h3>
    <h3>Email ID : {users?.emailID}</h3>

    <button onClick={handleBack}>Back to User Page</button>
    </>
  )
}

export default UserDetails