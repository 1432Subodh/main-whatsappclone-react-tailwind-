import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Social() {
    
    // const facebook = <FaFacebookF/>;
  return (
    <div className="flex items-center mt-[20px] justify-between">
      <div className="flex gap-10 text-white">
        {["2024 © WhatsApp LLC", "Terms & Privacy Policy"].map(
          (item, index) => (
            <a className="text-sm" href="">{item}</a>
          )
        )}
      </div>
      <div className="icons text-white flex gap-5 ">
            <a className="w-[50px] h-[50px] flex items-center justify-center border border-[white] rounded-[50%]" href=""><FaFacebookF/></a>
            <a className="w-[50px] h-[50px] flex items-center justify-center border border-[white] rounded-[50%]" href=""><FaLinkedinIn/></a>
            <a className="w-[50px] h-[50px] flex items-center justify-center border border-[white] rounded-[50%]" href=""><FaInstagram/></a>
            <a className="w-[50px] h-[50px] flex items-center justify-center border border-[white] rounded-[50%]" href=""><FaYoutube/></a>
      </div>
      <div className="select">
        <select className="w-[120px]  p-[10px] rounded-[22px] bg-green-600" name="" id="">
            <option value="">English</option>
            <option value="">Hindi</option>
            <option value="">Marathi</option>
            <option value="">Telgu</option>
        </select>
      </div>
    </div>
    
  );
}

export default Social;
