import React, { useState } from 'react';
import axios from 'axios';
import endpoints from '../../endpoint/index';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(endpoints.login, { email, password });
      
      if (response.status === 200) {
        // Guardar el token o la información del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        // Redirigir al usuario a la página principal o dashboard
        navigate('/');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'An error occurred during sign in.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-700">
        Sign In
      </h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full input input-bordered" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input 
            type="password" 
            placeholder="Enter Password" 
            className="w-full input input-bordered" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
        <div>
          <button type="submit" className="btn btn-block btn-neutral">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
