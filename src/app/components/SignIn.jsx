import React, { useState } from 'react'
import { FaFacebookF, FaGoogle,FaEye,FaEyeSlash } from 'react-icons/fa'


const SignIn = () => {
    const [isVisible,setIsVisible] = useState(false)
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    console.log('this is formdata',formData)

    const handleViewPassword=()=>{
        setIsVisible(!isVisible)
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <div className="bg-white rounded-lg w-full max-w-md p-8">
 
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Log In</h1>

 
      <form className="space-y-5" onSubmit={handleSubmit}>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div className='flex justify-between'>
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type={isVisible?"text":"password"}
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
          <span onClick={handleViewPassword}>
            {
                isVisible?<FaEye/>:<FaEyeSlash/>
            }
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <button type="button" className="text-sm text-orange-600 hover:underline">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2.5 rounded hover:bg-orange-700 transition-colors"
        >
          LOGIN
        </button>


        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">or continue with</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded hover:bg-blue-700 transition-colors">
            <FaFacebookF size={16} />
            <span>Facebook</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-2.5 rounded hover:bg-red-600 transition-colors">
            <FaGoogle size={16} />
            <span>Google</span>
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Do not have an account?{' '}
          <button className="text-orange-600 hover:underline font-medium">
            Sign Up
          </button>
        </p>
      </form>
    </div>
  )
}

export default SignIn