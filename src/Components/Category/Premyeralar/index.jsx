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
          .then(res => setData(res.data.results ))
          .catch(err => console.log(err))
      }, [])
      const result = data.map(info => {
        return (
            <SwiperSlide className='text-center items-center justify-center flex'>
                <img className='IMG' src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt="" />
                <h1 className='text-white w-full cs-title text-2xl pl-[42%] mt-[-75px]'>{info.original_title}</h1>
            </SwiperSlide>
        )
      })
  return (
    <div className='h-[800px] bg-[#191f28] mt-[80px]'>
        <div className='pt-[50px]'>
            <h2 className='text-[#A5BBDC] border-l-[3px] border-[#49345d] ml-[185px] pl-[12px] text-[17px]'><b>ENG YUQORI BAHOLI</b></h2>
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
            {data.length > 0 ? result : error}
        </Swiper>
    </div>
  )
}

{/* <SwiperSlide>
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
</SwiperSlide> */}