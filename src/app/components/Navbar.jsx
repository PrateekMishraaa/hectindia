import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.webp"
import Link from 'next/link'
import { FaFacebook,FaLinkedinIn  } from 'react-icons/fa'
import { FiInstagram } from "react-icons/fi";
const Navbar = () => {
  return (
   <>
   <section className='h-28 w-full  px-18 py-2'>
   <div className='h-auto w-full border-2 border-black flex justify-between'>
    <div>
        <Image src={Logo} className='h-20 w-40'/>
    </div>
    <div className='h-auto w-4/6 border-2 border-green-800'>
    <ul className='flex gap-4 py-4'>
        <li><Link href=""><FaFacebook/></Link></li>
        <li><Link href=""><FaLinkedinIn/></Link></li>
        <li><Link href=""><FiInstagram/></Link></li>
        <li><Link href="">Facebook</Link></li>
        <li><Link href="">Facebook</Link></li>
    </ul>
    </div>
    <div>3</div>
   </div>
   </section>
   </>
  )
}

export default Navbar
