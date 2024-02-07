import React from 'react'
import { GoDownload } from "react-icons/go";

function DownloadBtn() {
  return (
    <div>
        <button className='flex justify-center items-center gap-3 bg-green-500 p-3 rounded-[52px] px-6 border-[1px] border-black border-solid'>
              <span>Download</span>
              <span><GoDownload/></span>
            </button>
    </div>
  )
}

export default DownloadBtn