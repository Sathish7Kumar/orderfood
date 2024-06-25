import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Users = () => {
    const [users, setusers] = useState([])
    const nav  = useNavigate()
    const getUserRespose = async  () => {
        try {
            const response = await axios.get("https://mobileproducts.onrender.com/products")
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
        axios.delete("https://mobileproducts.onrender.com/delete/"+id)
        alert(`Mobile: ${name} Deleted Successfully`)
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
                    <th>Mobile Name</th>
                    <th>Image URL</th>
                    <th>Price</th>
                    <th>Specification</th>
                    <th>Rating</th>
                    <th>Count</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                    {users.map((userDetails,index)=>{
                        return(
                            <tr key={index}>
                            <td>{userDetails.mobilename}</td>
                            <td>{userDetails.image}</td>
                            <td>{userDetails.price}</td>
                            <td>{userDetails.desc}</td>
                            <td>{userDetails.rating.rate}</td>
                            <td>{userDetails.rating.count}</td>
                            <td>
                                <button onClick={()=>handleView(userDetails._id)}>View</button>
                                <button onClick={()=>handleEdit(userDetails._id)}>Edit</button>
                                <button onClick={()=>handleDelete(userDetails._id,userDetails.mobilename)}>Delete</button>
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