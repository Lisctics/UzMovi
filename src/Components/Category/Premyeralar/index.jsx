import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Info1 from "../../../assets/Images/Info1.jpg"
import Info2 from "../../../assets/Images/Info2.jpg"
import Info3 from "../../../assets/Images/Info3.jpg"
import Info4 from "../../../assets/Images/Info4.jpg"
import Info5 from "../../../assets/Images/Info5.jpg"

export default function index() {
  return (
    <div className='h-[800px] bg-[#191f28] mt-[80px]'>
        <div className='pt-[50px]'>
            <h2 className='text-[#A5BBDC] border-l-[3px] border-[#49345d] ml-[185px] pl-[12px] text-[17px]'><b>PREMYERALAR</b></h2>
        </div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-[1170px] ml-[180px] mt-[20px]"
        >
            <SwiperSlide>
                <img className='IMG' src={Info1} alt="" />
                <h1 className='text-white cs-title pl-[30%] text-2xl mt-[-75px]'>Maxluqlar hujumi premyera uzbek o'zbek tilida</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className='IMG' src={Info2} alt="" />
                <h1 className='text-white cs-title pl-[40%] text-2xl mt-[-75px]'>Yovuzlik hududi premyera</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className='IMG' src={Info3} alt="" />
                <h1 className='text-white cs-title pl-[30%] text-2xl mt-[-75px]'>Qog'oz bino Berlin barcha qismlari uzbek o'zbek tilida</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className='IMG' src={Info4} alt="" />
                <h1 className='text-white cs-title pl-[22%] text-2xl mt-[-75px]'>Noyob buyumlar xonasi ujas serial o'zbek tilida barcha qismlari </h1>
            </SwiperSlide>
            <SwiperSlide>
                <img className='IMG' src={Info5} alt="" />
                <h1 className='text-white cs-title pl-[30%] text-2xl mt-[-75px]'>Dunki premyera hind kino uzbek o'zbek tilida</h1>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
