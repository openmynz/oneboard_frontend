import LoginImage from "../images/loginimage.png"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from "../json/users.json"

interface User {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User | undefined = usersData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
     navigate('/main');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex h-screen bg-pink">
      <div className="w-2/3 bg-gray-200 flex items-center justify-center">
        <img
          src={LoginImage}
          alt="Image"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-1/3 bg-customBlue flex items-center justify-center ">
        <form className="flex-col" onSubmit={handleLogin}>
          <div className="mb-4">
           
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              className="ml-5 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
      
            <input
              type="password"
              id="password"
              name="password"
              className="ml-5 shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline rounded-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-customOrange text-white font-semibold  shadow-md rounded-full "
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
