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
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-700">Certified Organic & Vegan Labels</h2>
        <p className="text-green-600">All our products are 100% bio-based and ethically sourced.</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="max-w-4xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Bio label ${index + 1}`}
              className="w-32 h-32 rounded-full object-cover border-4 border-green-300 shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
