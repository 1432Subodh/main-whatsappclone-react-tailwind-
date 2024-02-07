import React from 'react'
import DownloadBtn from './DownloadBtn';
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  return (
    <>
        <nav className="navbar w-full h-20 flex justify-between items-center px-10 fixed top-0 bg-[#fcf5ebe5] z-[100]">
            <div className="logo flex items-center">
              <img className='w-32' src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="" srcset="" />
            </div>
            <ul className="flex gap-9 capitalize font-normal text-lg items-center">
                <li>Home</li>
                <li className='flex items-center justify-center gap-1'><span>Features</span><span><FaAngleDown/></span></li>
                <li>Privacy</li>
                <li>help Center</li>
                <li>Blog</li>                
                <li>For Business</li>                
                <li>Download</li>                
            </ul>
            <DownloadBtn/>
        </nav>
    </>
  )
}

export default Navbar