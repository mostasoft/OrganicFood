'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/3.jpg',
  '/3.jpg',
  '/3.jpg',
  '/3.jpg',
];

export default function BioLabels() {
  return (
    <section className="py-10 bg-green-50">
      <div className="text-center mb-6 px-4">
        <h2 className="text-3xl font-bold text-green-700">Certified Organic & Vegan Labels</h2>
        <p className="text-green-600">All our products are 100% bio-based and ethically sourced.</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Bio label ${index + 1}`}
              className="w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 rounded-full object-cover border-4 border-green-300 shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
