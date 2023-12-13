/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1, name: "Sahayata24x7", company: "Front-End Developer • 2023 (2 - Months of InternShip)", comment: " Worked on Frontend pages with React JS for eCommerce website https://dev.sahayata24x7.com/"
    },
    {
        id: 2, name: "Enmosis Software Solutions", company: "Front-End Developer • 2023 (3 - Months of InternShip)", comment: "Responsibilities like website designing,Developed a static website."
    },
    {
        id: 3, name: "Sublime Enterprises", company: "Front-End Developer • 2021 - 2022 (8 - Months of InternShip)", comment: "I have created responsive web pages for the recruitment portal websites.They have assigned me Static project to designed."
    },
    {
        id: 4, name: "TOP-HEIGHTS", company: "Frontend-Developer • 2022 (1 - Months of Internship) • LINK - https://topheights.in/#", comment: "Developed and maintained software applications.Conducted code reviews and provided feedback to improve code quality."
    },
  
]

const ExperienceData = () => {
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
                    <div className='bg-[#78350f] p-2 text-cyan-50 cursor-pointer'>
                        <h1 className='w-auto text-lg font-extrabold'>{review.name}</h1>
                        <p className='text-sm'>{review.company}</p>
                        <p className='my-5'>" {review.comment}</p>
                        <div className='flex gap-4 items-center'>
                           
                            
                        </div>
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </>
    );
};

export default ExperienceData;