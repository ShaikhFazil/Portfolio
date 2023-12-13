
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';

const Educations = () => {
  return (
    <div className="lg:px-12 px-4 my-32 py-32 bg-bgShade " id='Educations'>
      <div className="mb-20">
      
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Educations(3)
        </h2>
      </div>

      {/* reviews */}
      <div>
           <ReviewCard/>
      </div>
    </div>
  );
};

export default Educations;
