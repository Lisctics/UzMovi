import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import film1 from "../../../assets/Images/film1.jpg"
import film2 from "../../../assets/Images/film2.jpg"
import film3 from "../../../assets/Images/film3.jpg"
import film4 from "../../../assets/Images/film4.jpg"
import film5 from "../../../assets/Images/film5.jpg"
import film6 from "../../../assets/Images/film6.jpg"
import film7 from "../../../assets/Images/film7.jpg"
import film8 from "../../../assets/Images/film8.jpg"

export default function index() {
  return (
    <div className='w-[892px] ml-[180px] overflow-hidden'>
        <h2 className='text-[#A5BBDC] border-l-2 border-[#0E536C] pl-[12px] mt-[50px] text-[17px]'><b>TARJIMA KINOLAR</b></h2>
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
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Maxluqlar hujumi premyera uzber o'zbek tilida</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[130px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film2} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Ona g'azabi premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[70px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film3} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Shohona bayram premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[10px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film4} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Ota merosi premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-50px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film5} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Telba premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-110px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film6} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Mening onam</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-170px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film7} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Yovuzlik hududi premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px] ml-[-230px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film8} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Android uzbek o'zbek tilida premyera</h3>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}