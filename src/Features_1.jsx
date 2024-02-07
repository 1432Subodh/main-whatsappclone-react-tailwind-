import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function Features_1({data}) {
  
  return (
    <>
        <div className="card px-[120px] flex justify-between items-center my-[60px]">
          <div className="card-deatils w-[40%] flex flex-col gap-4">
            <h1 className='text-6xl font-semibold'>{data.h1}</h1>
            <p>{data.para}</p>
            <a className='flex items-center' href="#">Learn More <FaAngleRight/></a>
          </div>
          <img src={data.imgUrl} alt="" />
        </div>
        <div className="card px-[120px] flex justify-between items-center my-[60px] ">
          <img src={data.imgUrl1} alt="" />
          <div className="card-deatils w-[40%] flex flex-col gap-4">
            <h1 className='text-6xl font-semibold'>{data.h2}</h1>
            <p>{data.para1}</p>
            <a className='flex items-center' href="#">{data.learn}</a>
          </div>
        </div>
    </>
  )
}

export default Features_1