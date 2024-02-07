import React from 'react'
import DownloadBtn from './DownloadBtn'

function Foot({footData}) {
  return (
    <>
            <div className='flex'>
                <ul className='font-semibold flex flex-col text-[#e5e9ebed] gap-2'>
                    <li className='mb-[15px]'><p className='text-xs font-normal'>{footData.why}</p></li>
                    <li>{footData.listData1}</li>
                    <li>{footData.listData2}</li>
                    <li>{footData.listData3}</li>
                    <li>{footData.listData4}</li>
                </ul>  
            </div>
    </>  
  )
}

export default Foot