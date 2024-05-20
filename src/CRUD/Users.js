import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Users = () => {
    const [users, setusers] = useState([])
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

    const handleDelete = (id,name) =>{
        axios.delete("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/users/"+id)
        alert(`user: ${name} Deleted Successfully`)
        getUserRespose()
    }

  return (
    <>
    <div>
        <h1>User Details </h1>
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
                                <button>View</button>
                                <button>Edit</button>
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