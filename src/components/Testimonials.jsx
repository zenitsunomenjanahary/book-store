import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import { testimonialsData } from '../data/data';

const Testimonials = () => {
  return (
    <div className='px-4 md:px-28 md:py-16'>
        <h1 className='text-3xl font-bold text-[#050C26] text-center'>What Student's Say</h1>
        <p className='text-[#8a8a8a] text-center' >Lorem Ipsum is simply dummy text of the printing.</p>
            <Swiper
              spaceBetween={33}
              slidesPerView={2}
              autoplay
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
          >
              {
                testimonialsData.map((item)=>(
                  <SwiperSlide key={item.id}>
                    <div className='px-4 py-4 shadow-xl my-20 min-h-[200px] max-h-[450px] w-full items-center'>
                      <p className='text-[#ACACAC] text-lg'>{item.message}</p>
                      <div className='md:flex space-x-4 mt-4'>
                        <img className='w-16 h-16 rounded-full shadow-xl' src={item.image} alt={item.id}/>
                        <div>
                          <h1 className='text-xl font-bold'>{item.name}</h1>
                          <h1 className='text-xl text-[#acacac]'>{item.parcours}</h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
          </Swiper>
    </div>
  )
}

export default Testimonials