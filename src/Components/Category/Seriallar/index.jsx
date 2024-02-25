import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import film1 from "../../../assets/Images/film18.jpg"
import film2 from "../../../assets/Images/film19.jpg"
import film3 from "../../../assets/Images/film20.jpg"
import film4 from "../../../assets/Images/film21.jpg"
import film5 from "../../../assets/Images/film22.jpg"
import film6 from "../../../assets/Images/film23.jpg"
import film7 from "../../../assets/Images/film24.jpg"
import film8 from "../../../assets/Images/film25.jpg"

export default function index() {
  return (
    <div className='w-[892px] ml-[180px] overflow-hidden'>
        <h2 className='text-[#A5BBDC] border-l-2 border-[#22744b] pl-[12px] mt-[50px] text-[17px]'><b>SERIALLAR</b></h2>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode]}
        className="ml-[-184px] free"
      >
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[185px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film1} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Qog'oz bino Berlin barcha qismlari uzbek o'zbek tilida</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[130px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film2} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Osiyo turk serial barcha qismlari uzbek o'zbek tilida</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[70px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film3} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[183px] pl-[20px]'>Noyob buyumlar xonasi ujas serial uzbek o'zbek tilida...</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[10px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film4} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[182px] pl-[20px]'>Bethoven virusi koreys serial barcha qismlari uzbek...</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-50px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film5} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Tikuvchi turk serial barcha qismlari uzber o'zbek tilida</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-110px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film6} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[189px] pl-[20px]'>Exo echo Uzbek o'zbek tilida barcha qismlari yuklab...</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-170px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film7} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[183px] pl-[20px]'>Zulmat ko'rlar so'qirlar jangi premyera serial barhca...</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-230px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film8} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Askar koreya seriali barcha qismlari uzbek o'zbek tilida</h3>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}