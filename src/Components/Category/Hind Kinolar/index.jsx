import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import film1 from "../../../assets/Images/film9.jpg"
import film2 from "../../../assets/Images/film10.jpg"
import film3 from "../../../assets/Images/film11.jpg"
import film4 from "../../../assets/Images/film12.jpg"
import film5 from "../../../assets/Images/film13.jpg"
import film6 from "../../../assets/Images/film14.jpg"
import film7 from "../../../assets/Images/film15.jpg"
import film8 from "../../../assets/Images/film16.jpg"
import film9 from "../../../assets/Images/film17.jpg"

export default function index() {
  return (
    <div className='w-[892px] ml-[180px] overflow-hidden'>
        <h2 className='text-[#A5BBDC] border-l-2 border-[#8a4316] pl-[12px] mt-[50px] text-[17px]'><b>HIND KINOLAR</b></h2>
        <Swiper
        slidesPerView={4}
        spaceBetween={-230}
        freeMode={true}
        pagination={{
            clickable: true,
        }}
        modules={[FreeMode]}
        className="ml-[-184px] swipp"
      >
        <SwiperSlide className='ml-[190px] mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film1} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Dunki premyera hind kino uzber o'zbek tilida</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide className='mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film2} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Qochoq 2 premyera</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film3} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Nikoh qadri premyera uzoq umr va boylik</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film4} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Behuda kelishuv premyera hind kino</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film5} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Adipurush</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film6} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Ota hind kino premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film7} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Qudrat premyera</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film8} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>Intiqom</h3>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid mt-[25px]'>
            <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                <img src={film9} className='flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                <h3 className='pt-[15px] w-[178px] pl-[20px]'>jilla premyera</h3>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
