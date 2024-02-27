import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6"; // <FaFilm />
import { FaEnvelope } from "react-icons/fa"; // <FaEnvelope />
import { FaExclamationCircle } from "react-icons/fa"; // <FaExclamationCircle />
import { FaAngleDoubleDown } from "react-icons/fa";

export default function index() {
  const [innerwidth, setInnerwidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setInnerwidth(window.innerWidth)
  })
  return (
    <div>
        <div className='mt-[15px] flex gap-2 ml-[180px] login'>
          <div className='flex text-center items-center justify-center gap-1 w-[66px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
            <FaUser className='text-xs' color='#99B1D4'/>
            <p className='text-[#99B1D4] text-[12px]'>Kirish</p>
          </div>
          <div className='flex text-center items-center justify-center gap-1 w-[114px] h-[40px] bg-[#222933] rounded-md mt-2 border border-[#313842]'>
            <p className='text-[#99B1D4] text-[12px]'>Ro'yxatdan o'tish</p>
          </div>
        </div>
      {innerwidth > 1028 ? (
        <>
        <div className='flex gap-3 mt-[-40px] ml-[1200px] info'>
          <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
            <FaFilm />
          </div>
          <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
            <FaEnvelope />
          </div>
          <div className='flex items-center text-center justify-center h-[39.6px] w-[40px] bg-[#222933] rounded text-[#99B1D4] border border-[#313842]'>
            <FaExclamationCircle />
          </div>
        </div>

        </>
      ) : (
        <div className='w-full'>
          <div className='text-[18px] flex items-center justify-center w-[48px] h-[39.6px] bg-[#222933] border border-[#313842] text-[#99B1D4] rounded ml-[79%] mt-[-40px]'>
            <FaAngleDoubleDown />
          </div>
        </div>
      )}
      <div>
        <center>
          <input type="text" placeholder='Qidirish...' className='w-[1165px] bg-[#222933] h-[40px] mt-[40px] pl-[25px] rounded border border-[#3e444d]'/>
        </center>
      </div>
    </div>
  )
}
