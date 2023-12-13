
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ExperienceData from './ExperienceData';

const Experience = () => {
  return (
    <div className="lg:px-12 px-4 my-32 py-2 bg-bgShade " id='Experience'>
      <div className="mb-10">
    
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
         Experience (4)
        </h2>
      </div>

      {/* reviews */}
      <div>
          <ExperienceData />
      </div>
    </div>
  );
};

export default Experience;
