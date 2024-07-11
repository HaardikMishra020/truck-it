import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const navigate=useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
    const formData={
        email,username,password
    };
    const token=localStorage.getItem('token');
    const response=await axios.post('http://localhost:8080/auth/signup', formData,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
    localStorage.setItem('token', response.data.token);
    alert('Successfully Registered');
    navigate('/dashboard');
    }
    catch(err){
        alert(err.response.data.msg);
        setEmail("");
        setPassword("");
        setUsername("");
    }
}
  return (
    <>
    <Navbar isAdmin={false}/>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase ">
                   Sign up
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                          htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email" id="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                          htmlFor="username"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text" id="username" name="username" value={username}  onChange={(e) => setUsername(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password" name="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div></>
  )
}

export default Signup;
