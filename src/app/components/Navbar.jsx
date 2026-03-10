'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.webp"
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaPhone, FaTimes } from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoTwitter, IoAirplane, IoTicket } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import SignIn from './SignIn'

const Navbar = () => {
    const [openSignIn, setOpenSignIn] = useState(false)
    const [isLogin, setIsLogin] = useState(true) 

    const handleOpenSignIn = () => {
        setOpenSignIn(!openSignIn)
    }

    const handleOpenRegister = () => {
        setIsLogin(false)
        setOpenSignIn(true)
    }

    const handleOpenLogin = () => {
        setIsLogin(true)
        setOpenSignIn(true)
    }

    const handleClosePopup = () => {
        setOpenSignIn(false)
    }

    return (
        <>
            <nav className='w-full bg-white shadow-sm'>
             
                <div className='hidden lg:flex justify-end items-center px-4 lg:px-8 py-2 text-sm text-gray-600 border-b'>
                    <div className='flex items-center space-x-4'>
                     
                        <div className='flex items-center space-x-3'>
                            <Link href="#" className='hover:text-orange-600 transition-colors'>
                                <FaFacebookF size={14} />
                            </Link>
                            <Link href="#" className='hover:text-orange-600 transition-colors'>
                                <FaLinkedinIn size={14} />
                            </Link>
                            <Link href="#" className='hover:text-orange-600 transition-colors'>
                                <FiInstagram size={14} />
                            </Link>
                            <Link href="#" className='hover:text-orange-600 transition-colors'>
                                <TfiYoutube size={14} />
                            </Link>
                            <Link href="#" className='hover:text-orange-600 transition-colors'>
                                <IoLogoTwitter size={14} />
                            </Link>
                        </div>

                        <span className='text-gray-300'>|</span>

                        <div className='flex items-center space-x-1'>
                            <FaPhone className='text-orange-600' size={12} />
                            <span>+91 9999599100</span>
                        </div>
                    </div>
                </div>

                <div className='px-4 lg:px-8 py-3'>
                    <div className='flex items-center justify-between'>
                  
                        <div className='flex items-center'>
                            <div className='text-2xl font-bold'>
                                <Image src={Logo} alt="HECT INDIA Logo" />
                            </div>
                        </div>

                        <div className='hidden lg:flex items-center space-x-6'>
                           
                            <div className='flex items-center space-x-1 group cursor-pointer'>
                                <HiOutlineBuildingLibrary className='text-gray-800' size={18} />
                                <span className='text-gray-700 group-hover:text-orange-600 transition-colors'>
                                    List a Hotel
                                </span>
                            </div>

                      
                            <div className='flex items-center space-x-1 group cursor-pointer'>
                                <IoAirplane className='text-gray-800' size={18} />
                                <span className='text-gray-800 group-hover:text-orange-600 transition-colors'>
                                    Sell Tours
                                </span>
                            </div>

                          
                            <div className='flex items-center space-x-1 group cursor-pointer'>
                                <IoTicket className='text-gray-800' size={18} />
                                <span className='text-gray-800 group-hover:text-orange-600 transition-colors'>
                                    Manage Trips
                                </span>
                            </div>
                        </div>

                        
                        <div className='flex items-center'>
                            <button 
                                onClick={handleOpenLogin}
                                className='text-gray-700 hover:text-orange-600 transition-colors'
                            >
                                Sign in
                            </button>
                            <span className='text-gray-400 px-2'>or</span>
                            <button 
                                onClick={handleOpenRegister}
                                className=' text-black px-4 py-2 rounded '
                            >
                                Register
                            </button>

                    
                            <button className='lg:hidden ml-2 p-2'>
                                <FiMenu size={24} className='text-gray-700' />
                            </button>
                        </div>
                    </div>

                  
                    <div className='lg:hidden mt-3 pt-3'>
                        <div className='flex flex-wrap items-center gap-3 text-sm'>
                        
                            <div className='flex items-center space-x-1'>
                                <HiOutlineBuildingLibrary className='text-orange-600' size={16} />
                                <span className='text-gray-700'>List a Hotel</span>
                            </div>

                            <span className='text-gray-300'>|</span>

                            <span className='text-gray-700'>Sell Tours</span>

                            <span className='text-gray-300'>|</span>

                            
                            <span className='text-gray-700'>Manage Trips</span>
                        </div>

                      
                        <div className='flex items-center justify-between mt-3'>
                
                            <div className='flex items-center space-x-3'>
                                <Link href="#" className='text-gray-600 hover:text-orange-600'>
                                    <FaFacebookF size={14} />
                                </Link>
                                <Link href="#" className='text-gray-600 hover:text-orange-600'>
                                    <FaLinkedinIn size={14} />
                                </Link>
                                <Link href="#" className='text-gray-600 hover:text-orange-600'>
                                    <FiInstagram size={14} />
                                </Link>
                                <Link href="#" className='text-gray-600 hover:text-orange-600'>
                                    <TfiYoutube size={14} />
                                </Link>
                                <Link href="#" className='text-gray-600 hover:text-orange-600'>
                                    <IoLogoTwitter size={14} />
                                </Link>
                            </div>

                 
                            <div className='flex items-center space-x-1'>
                                <FaPhone className='text-orange-600' size={12} />
                                <span className='text-sm text-gray-700'>+91 9999599100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {openSignIn && (
                <>
           
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
                        onClick={handleClosePopup}
                    />
                    
          
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md">
                               
                                <button 
                                    onClick={handleClosePopup}
                                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <FaTimes size={20} />
                                </button>
                                
                             
                                <SignIn 
                                    isLogin={isLogin} 
                                    onClose={handleClosePopup}
                                    onToggle={() => setIsLogin(!isLogin)}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar