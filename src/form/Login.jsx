import React, { useState } from "react";

const Login = () => {
  const [mail, setmail] = useState(""); // admin@gmail.com
  const [password, setpassword] = useState(""); // admin

  const [isLoggin, setIsLoggin] = useState(false);

  const handleLogin = () =>{
    if(mail=="admin@gmail.com" && password=="admin"){
        setIsLoggin(true)
        alert("login successful")
    }
    else{
        alert(("invalid credentials"))
    }
  }
  const handleLogout= () =>{
        setIsLoggin(false)
        alert("logged out")
  }

  return (
    <>
    <div>
        {
            isLoggin ?
            <>
            <h1>Welcome User : {mail}</h1>
            <button onClick={handleLogout}>Logout</button>
            </> 
            :
            <>
            <form>
                <h1>Login Page</h1>
        <label htmlFor="email">Enter Your Mail :</label>
        <input
        id="email"
          type="email"
          onChange={(e)=>setmail(e.target.value)}
          placeholder="Enter ur Email"
          required
        />
        <br /> <br />
        <label htmlFor="password">Enter Your Password :</label>
        <input
        id="password"
          type="password"
          onChange={(e)=>setpassword(e.target.value)}
          placeholder="Enter ur Password"
          required
        />
        <br /> <br />
        <button onClick={handleLogin}>Login</button>
      </form>
            </>
        }
    </div>
    </>
  );
};

export default Login;
