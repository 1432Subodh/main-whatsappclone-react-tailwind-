import React from 'react'
import Foot from './Foot'
import DownloadBtn from './DownloadBtn'
import Social from './Social'

function MainFoot() {
    const footData =[{
        why : "What we do",
        listData1 : "Features",
        listData2 : "Blog",
        listData3 : "Security",
        listData4 : "For Business",
      },
      {
        why : "Who we are",
        listData1 : "About us",
        listData2 : "Careers",
        listData3 : "Brand Center",
        listData4 : "Privacy",
      },
      {
        why : "Use WhatsApp",
        listData1 : "Android",
        listData2 : "iPhone",
        listData3 : "Mac/Pc",
        listData4 : "WhatsApp Web",
      },
      {
        why : "Need Help?",
        listData1 : "Contact Us",
        listData2 : "Help Center",
        listData3 : "Download",
        listData4 : "Security Advisories",
      }
    ]
  return (
    <div className="mainfoot p-[110px] pb-[50px] bg-[#111B21]">
        <div className="topfoot flex justify-between">
            <div className="div flex flex-col gap-[60px] items-center">
                <img src="https://static.whatsapp.net/rsrc.php/v3/yJ/r/Qhrnh5evyPV.png" alt="" />
                <DownloadBtn/>
            </div>
            {footData.map((item,index)=>(
                <Foot footData={item}/>      
            ))}
        </div>
        <div className='w-full border-t-[0.5px] border-[#e5e9eba3] mt-[50px]'></div>
          <Social/>
        
    </div>
  )
}

export default MainFoot