import React, { useState } from "react";
import { useEmployeeContext } from "./EmployeeContext";

const Details = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const { state, dispatch } = useEmployeeContext();

    const handleAdd = () =>{
        if(!name || !age ){
            return null
        }
        const newEmployee = {
            id : Math.floor((Math.random()*100) + 10 ),
            name : name,
            age : age
        }
        dispatch({type : "ADD_EMP" , payload : newEmployee})
    }

    const handleDelete = (id) =>{
        dispatch({type:"DEL_EMP",payload:id})
    }


  return (
    <>
      <div>
        <div>
            <h1>Create Employee</h1>
            <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="Enter Name" /> <br /> <br />
            <input type="text" onChange={(e)=>setage(e.target.value)} placeholder="Enter Age" /> <br /> <br />
            <button onClick={handleAdd}>Add</button>
        </div>
        <br />
        <h1>Employee Details </h1>
        <ul>
          {state.employee.map((e, i) => {
            return <li key={i}>
                Emp ID : {e.id} , Emp Name : {e.name} , Emp Age : {e.age} <button onClick={()=>handleDelete(e.id)}>Delete</button>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Details;
