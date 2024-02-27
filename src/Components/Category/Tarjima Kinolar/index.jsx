import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import axios_instance from '../../../Services/Axios/index';

export default function index() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios_instance.get("/movie/popular")
          .then(res => setData(res.data.results ))
          .catch(err => console.log(err))
      }, [])

      const result = data.map(info => {
        return (
        <SwiperSlide>
            <div className='grid mt-[25px] ml-[185px]'>
                <div className='text-[#A5BBDC] text-[13px] h-[361px] w-[201px] bg-[#222933] pt-[2px] text-center rounded'>
                    <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} className='object-cover flex ml-[1.5px] h-[275px] w-[198px]' alt="" />
                    <h3 className='pt-[15px] w-[178px] pl-[20px]'>{info.original_title}</h3>
                </div>
            </div>
        </SwiperSlide>
        )
      })

  return (
    <div className='w-[892px] ml-[180px] overflow-hidden'>
        <h2 className='text-[#A5BBDC] border-l-2 border-[#3848b0] pl-[12px] mt-[50px] text-[17px]'><b>POPULYARNIY KINOLAR</b></h2>
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
        {data.length > 0 ? result : error}
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}