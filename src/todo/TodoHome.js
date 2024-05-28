import React, { useEffect, useState } from 'react'
import axios from 'axios';
const url = "https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/todo"

const TodoHome = () => {

    const [todoData, settodoData] = useState([])

    const [todoInput, settodoInput] = useState("");

    const getResponse = async () =>{
        try {
            const response = await axios.get(url)
            settodoData(response.data)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        getResponse()
    },[])

    // console.log(todoData);

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const newTodo = {
            todoList : todoInput,
        }
        try {
            await axios.post(url,newTodo)
            alert("Task Created Successfuly")
            getResponse()
        } catch (error) {
            console.log(error);
        }
      }

      const handleDelete = (id,taskDelete) =>{
        axios.delete("https://664afb2ea300e8795d43b586.mockapi.io/userdetails/v1/todo/"+id)
        alert(`This Task  "${taskDelete}" is Deleted Successfully`)
        getResponse()
    }

  return (
    <>
    <h1>Todo App</h1>

    <div>
    <form onSubmit={handleSubmit}>
          <label>Enter Your Task : </label> <br/>
          <input
            type="text"
            value={todoInput}
            onChange={(e) => settodoInput(e.target.value)}
            placeholder="Enter Your Task"
            required
          />
          <br/><br/>
        <button>Add</button>
        </form>
    </div>
    <hr />
    <div>
        <table>
            <thead>
                <tr>
                <th>TodoList</th>
                <th>Options</th>
                </tr>
            </thead>
            <tbody>
            {todoData.map((todoItem,index)=>{
                return (
                    <tr key={index}>
                    <td>{todoItem.todoList}</td>
                    <td>
                    <button>Edit</button>
                    <button onClick={()=>handleDelete(todoItem.id,todoItem.todoList)}>Delete</button></td>
                    </tr>
                )
            })}
            
            </tbody>
        </table>
    </div>
    </>
  )
}

export default TodoHome