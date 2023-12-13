/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1, name: "LITTLE ANGEL’S HIGH SCHOOL - (SSC) ", company: "JUNE, 2005 - MAY, 2017"
    },
    {
        id: 2, name: "VIDYALANKAR POLYTECHNIC COLLEGE OF ENGINEERING (DIPLOMA IN EXTC)", company: "JULY, 2017 - MAY, 2020"
    },
    {
        id: 3, name: "FR.CONCEICAO RODRIGUES COLLEGE OF ENGINEERING (BE IN ECS)", company: "AUGUST,2020 - MAY,2023"
    },
   
]

const ReviewCard = () => {
    return (
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0"
      >
        {
            reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
                    <div>
                    <p className='font-semibold'>{review.name}</p>
                       
                        <p className='text-sm'>{review.company}</p>
                       
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </>
    );
};

export default ReviewCard;