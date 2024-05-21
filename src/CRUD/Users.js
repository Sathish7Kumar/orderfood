import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Users = () => {
    const [users, setusers] = useState([])
    const nav  = useNavigate()
    const getUserRespose = async  () => {
        try {
            const response = await axios.get("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users")
            setusers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getUserRespose()
    },[])
    // console.log(users);

    const handleView = (id) =>{
        nav('/users/'+id)
    }

    const handleEdit = (id) =>{
        nav('/edit-user/'+id)
    }

    const handleDelete = (id,name) =>{
        axios.delete("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users/"+id)
        alert(`user: ${name} Deleted Successfully`)
        getUserRespose()
    }

  return (
    <>
    <div>
        <h1>User Details </h1>
        <h3>Create New User <span><Link to='/create-user'>Create</Link></span></h3>
        <table>
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>USERNAME</th>
                    <th>USER EMAIL-ID</th>
                    <th>USER MOBILE-NUMBER</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                    {users.map((userDetails,index)=>{
                        return(
                            <tr key={index}>
                            <td>{userDetails.id}</td>
                            <td>{userDetails.userName}</td>
                            <td>{userDetails.emailID}</td>
                            <td>{userDetails.mobileNumber}</td>
                            <td>
                                <button onClick={()=>handleView(userDetails.id)}>View</button>
                                <button onClick={()=>handleEdit(userDetails.id)}>Edit</button>
                                <button onClick={()=>handleDelete(userDetails.id,userDetails.userName)}>Delete</button>
                            </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Users