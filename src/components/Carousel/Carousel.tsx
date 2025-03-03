import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <Slider {...settings} className='max-w-7xl mx-auto overflow-hidden'>
      <div>
        <img src='../../../public/images/Banner-1.png' alt='Slide 1' />
      </div>
      <div>
        <img src='../../../public/images/banner-2.png' alt='Slide 1' />
      </div>
    </Slider>
  )
}
