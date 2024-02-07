import React from 'react'
import DownloadBtn from './DownloadBtn'

function Hero() {
  return (
    <>
        <div className="hero-section mx-5 relative flex justify-center gap-10 flex-col px-[90px] w-[96vw] mt-[80px] h-screen  rounded-[40px] bg-cover bg-[url('https://cdn.pixabay.com/photo/2016/01/31/15/22/mother-1171569_1280.jpg')]">
            <div className="hero-text flex flex-col gap-6">
                <h1 className="text-8xl text-white font-semibold">Message <br/> privately</h1>
                <p className="font-semibold text-white">Simple, reliable, private messaging and <br /> calling for free*, available all over the world.</p>
            </div>
            <DownloadBtn/>
        </div>
        <img className='w-[96vw] mx-5'  src="https://scontent.whatsapp.net/v/t39.8562-34/315574582_669241857978207_6336028129238262344_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=8ugBCKVvAHEAX9nHOwz&_nc_oc=AQm56ou_D4axcUN2fbS9ADhdKf9yM7fyStwx2irMWUhCOqoXU-lyWCKD1j56kbg-XuQ&_nc_ht=scontent.whatsapp.net&oh=01_AdTnBwrQRdm2EnAubinK4okOsOt5_2C3-c1l5xUOH8OmjA&oe=65C71E4C" alt="" />
        <div className='flex items-center justify-center'>
        <h1 className='w-[750px] text-center text-4xl font-semibold text-[#1C1E21] leading-[2.8rem] my-8'>With private messaging and calling, you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.</h1>
        </div>
        <img  className='w-[96vw] mx-5' src="https://scontent.whatsapp.net/v/t39.8562-34/315632381_5616928641708856_9210500231334849736_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=KDcUaYXBfZAAX_9EfYA&_nc_ht=scontent.whatsapp.net&oh=01_AdR0YlptjRio-Ix48fx6ke09w_wUKjkFjAuox1X7InNVyQ&oe=65C5E2CD" alt="" />
    </>
  )
}

export default Hero