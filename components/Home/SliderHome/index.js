import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

export default function SliderHome () {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12'>
        {/* Sidebar */}
        <div className='hidden md:flex flex-col items-center text-purple-400 rotate-180 writing-mode-vertical-rl'>
          <span className='text-lg font-semibold tracking-wide'>
            Choose the best. Choose us.
          </span>
        </div>

        {/* Product Info */}
        <div className='flex-1 text-center md:text-left md:mr-12'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            Plain Black Body fit T-shirt.
          </h1>
          <p className='text-xl italic mt-2'>Starting at price Rs. 400</p>
          <p className='mt-4 text-gray-300'>
            A soft, breathable jersey which is an excellent choice for the
            warmest day. It will mix great with any pair of jeans or pants.
          </p>
          <button className='mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition'>
            Shop Now
          </button>
        </div>

        {/* Product Image Slider */}
        <div className='flex-1 mt-6 md:mt-0'>
          <Swiper
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            className='w-full max-w-md'
          >
            <SwiperSlide>
              <img
                src='/tshirt1.png'
                alt='T-shirt 1'
                className='w-full object-cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='/tshirt2.png'
                alt='T-shirt 2'
                className='w-full object-cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='/tshirt3.png'
                alt='T-shirt 3'
                className='w-full object-cover'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
