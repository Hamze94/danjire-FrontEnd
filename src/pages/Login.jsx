import React, { useState } from 'react';
import { loginUser } from '../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/1.png';

import Navbar from '../components/Navbar';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <>
            <Navbar />

            <div className="bg-gray-100 min-h-screen flex justify-center items-center">
                <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full flex flex-col items-center">
                    <div className='flex gap-1'>
                        <img src={logo} alt="Logo" className="mx-auto mb-8 w-20" />
                        <h2 className="text-3xl font-bold mb-4 text-center pt-5 ">Login</h2>
                    </div>

                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" id="email" className="border border-gray-300 px-4 py-2 w-full rounded" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2">Password</label>
                            <input type="password" id="password" className="border border-gray-300 px-4 py-2 w-full rounded" value={password}
                                onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="bg-accent text-white px-4 py-2 rounded w-full">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
