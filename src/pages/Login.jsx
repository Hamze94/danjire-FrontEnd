import React from 'react';
import logo from '../assets/1.png';

const Login = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full flex flex-col items-center">
                <img src={logo} alt="Logo" className="mx-auto mb-8 w-20" />
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form className="w-full">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="email" id="email" className="border border-gray-300 px-4 py-2 w-full rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" className="border border-gray-300 px-4 py-2 w-full rounded" required />
                    </div>
                    <button type="submit" className="bg-accent text-white px-4 py-2 rounded w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
