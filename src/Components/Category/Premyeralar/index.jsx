import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios_instance from '../../../Services/Axios/index';

export default function index() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        axios_instance.get("/movie/top_rated")
          .then(res => setData(res.data.results))
          .catch(err => console.log(err))
      }, [])
      const result = data.map(info => {
        return (
            <SwiperSlide>
                <img className='!max-h-[00px] !object-cover md:!w-full !min-h-[500px] !w-[500px]' src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt="" />
                <h1 className='text-white md:!w-full !w-72 cs-title text-2xl mt-[-75px]'>{info.original_title}</h1>
            </SwiperSlide>
        )
      })
  return (
    <div className='h-[800px] bg-[#191f28] mt-[80px]'>
        <div className='pt-[50px]'>
            <h2 className='text-[#A5BBDC] border-l-[3px] border-[#49345d] lg:!ml-[185px] !ml-20 sm:!ml-20 pl-[12px] text-[17px]'><b>PREMYERALAR</b></h2>
        </div>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper md:!w-[700px] !w-[400px] sm:!w-[500px] md:!ml-20  lg:!w-[1100px] lg:!ml-[180px] mt-[20px]"
        >
            {data.length > 0 ? result : error}
        </Swiper>
    </div>
  )
}