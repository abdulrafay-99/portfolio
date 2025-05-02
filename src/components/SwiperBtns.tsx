import React from 'react'
import { Button } from './ui/button'
import { useSwiper } from 'swiper/react'

const SwiperBtns = () => {
    const swiper=useSwiper();
  return (
    <div className='flex justify-end w-full z-50 absolute bottom-0 gap-4 py-4 px-4'>
            <Button onClick={()=>{ return swiper.slidePrev()}}>{'<'}</Button>
          <Button onClick={()=>{ return swiper.slideNext()}}>{'>'}</Button >
          </div>
  )
}

export default SwiperBtns