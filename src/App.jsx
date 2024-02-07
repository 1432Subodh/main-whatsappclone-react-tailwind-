import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features_1 from './Features_1'
import MainFoot from './MainFoot'

function App() {

  const data =[{
    h1 :"Never miss a moment with voice and video calls",
    h2 : "Speak freely",
    para : "From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls.",
    para1:"With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them, and nobody in between, not even WhatsApp.",
    imgUrl : "https://scontent.whatsapp.net/v/t39.8562-34/316211879_640016534274402_8272733547019635528_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=JfC0AChYtvYAX9_yZcr&_nc_ht=scontent.whatsapp.net&oh=01_AdS8sURS8LOUF0qFu-hoZTV6EQtPrg0M8eddfc1DMI7nAw&oe=65C6B396",
    imgUrl1 :"https://scontent.whatsapp.net/v/t39.8562-34/316036583_870096634427722_4468595013887544943_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=NiVNHCQpl4kAX9_9-bh&_nc_ht=scontent.whatsapp.net&oh=01_AdTX4JopJOyiGQhZydQlcvHRXINqzrhz897qXSFkDG_ysw&oe=65C63AF1",
    learn :"Learn more "
  },
  {
    h1:"Keep in touch with your groups",
    h2:"Say what you feel",
    para : "Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless.",
    para1:"Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story.",
    imgUrl: "https://scontent.whatsapp.net/v/t39.8562-34/318759416_815630979518701_2490140615586319278_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=K6TcRZ5GM_4AX9axPPQ&_nc_ht=scontent.whatsapp.net&oh=01_AdS2_v9GLAhju3bfxS4NaYZMuPNoNwRGpkgWsmt2V-ulug&oe=65C5ED4D",
    imgUrl1: "https://scontent.whatsapp.net/v/t39.8562-34/409964903_7655947307754468_3960711266215354357_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=Hq2HRxyzs8QAX8odMV0&_nc_ht=scontent.whatsapp.net&oh=01_AdRjk3zRNPeocZdp3ZDbeAYQn7qNoSRy4y-HZZcAQ3a-OA&oe=65C60640",
    learn :"Learn more "
  },
  {
    h1:"Transform your business",
    para:"WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp.",
    imgUrl:"https://scontent.whatsapp.net/v/t39.8562-34/329699257_2856843487782508_7800545505417662242_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=0KkeDL6tUvEAX9100Tw&_nc_ht=scontent.whatsapp.net&oh=01_AdT5OEIhrPXu8uhN9uVY6p5Lj52ef5RTEMPJOsDSCIveqg&oe=65C6FB9B",
  }
]



 

  return (
    <div className="main w-full   relative bg-[#FCF5EB]">
      <Navbar/>
      <Hero/>
      {data.map((item,index)=>(
        <Features_1 data={item}/>

      ))}
      <MainFoot/>
      
    </div>
  )
}

export default App