import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cartCount = useSelector((state) => state.cartReducer.length)
    return (
        <div className='pt-4 bg-gray-100 top-0 sticky'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold  text-accent'>DANJIRE<span className=' font-thin tracking-tighter  text-red-400'>Shopping Center</span></h1>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input className=' border-2 border-accent px-6 py-2 w-full' type="text" placeholder='Baadh Alaabta' />
                        <div className="bg-accent text-white text-[26px] grid place-items-center px-4">
                            <CiSearch />
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-8 items-center ">
                        <div className='md:flex gap-3 hidden'>
                            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                                <CiUser />

                            </div>
                            <div>
                                <p className='text-gray-500 '>Hello, User</p>
                                <p className=' font-medium'>Your account</p>
                            </div>
                        </div>
                        <div className="text-gray-500 text-[32px] relative">
                            <IoCartOutline />
                            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                                {
                                    cartCount
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-200 pt-4" />
                <div className=" bg-accent hidden md:block ">
                    <ul className='container flex gap-8 uppercase py-4 text-white'>
                        <a href="">Home</a>
                        <a href="">shop</a>
                        <a href="">contact us</a>
                        <a href="">about us</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
