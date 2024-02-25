import React, { useState } from 'react'
import Logo from "../../assets/Images/logo.gif"

export default function index() {
  const [innerwidth, setInnerwidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setInnerwidth(window.innerWidth)
  })

  return (
    <header className='w-full'>
      {innerwidth > 1028? (
        <>
          <div className='head h-[103px] bg-[#222933]'>
            <img src={Logo} className='Logo ml-[180px] pt-[12px]' alt="" />
            <div className='flex text-[#A5BBDC] mt-[-52px] ml-[625px] text-[14px] nav text-center'>
              <div className='w-[117px] border-b border-[#a85019] h-[62px]'>
                <h1>BOSH SAHIFA</h1>
              </div>
              <div className='w-[99px] border-b border-[#2a8b58] h-[62px]'>
                <h1>KINOLAR 🠻</h1>
              </div>
              <div className='w-[101px] border-b border-[#107b9d] h-[62px]'>
                <h1>SERIALLAR</h1>
              </div>
              <div className='w-[74px] border-b border-[#be1e3a] h-[62px]'>
                <h1>JANR 🠻</h1>
              </div>
              <div className='w-[59px] border-b border-[#a8843e] h-[62px]'>
                <h1>YIL 🠻</h1>
              </div>
              <div className='w-[113px] border-b border-[#6c4682] h-[62px]'>
                <h1>MAMLAKAT 🠻</h1>
              </div>
              <div className='w-[156px] border-b border-[#a85019] h-[62px]'>
                <h1>KINO YANGILIKLARI</h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='bg-[#222933] h-[62px]'>
            <img src={Logo} className='logo ml-[20px] pt-[12px] h-[50px] w-[140px]' alt="" />
            <div className='burger h-[45px] w-[106px] bor bg-[#3B2946] text-[#CEC2D5] text-center pt-[8px] rounded-md border ml-[73%] mt-[-40px] border-[#553f62]'>MENYU ☰<span className='absolute ml-[-5px]'>☰</span></div>
          </div>
        </>
      )}
    </header>
  )
}
