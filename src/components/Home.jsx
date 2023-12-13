import banner from "../assets/banner.jpeg";



const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row items-center justify-between py-2 gap-2">
      <div className="md:w-[30%] rounded w-full">
          <img src={banner} alt="" className="rounded" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-2">Hey, I am FAZIL JAVEED SHAIKH</p>
          <h1 className="md:text-4xl text-4xl font-bold text-headingcolor leading-snug md:leading-[66px]  mb-2">
            I am <span className="text-[#78350f]">FULL STACK WEB DEVELOPER</span> & <span className="text-[#78350f]">SOFTWARE DEVELOPER</span>
          </h1>
          <p className="md:w-[80%] font-semibold mb-5">
          Over the past 14 months, I have gained valuable experience in the field of web development, with a primary focus on frontend development. During this time, I had the opportunity to work on diverse projects that have allowed me to refine my skills and develop a strong foundation in web development. Here are some key highlights from my experience.
          </p>
          <p className="text 1xl text-body leading-9 mb-8">
           <label>Email Id: - shaikhfazil180@gmail.com</label>
           <div><label>Phone No: - 9167076470</label></div>
          </p>
          <a href="mailto:shaikhfazil180@gmail.com" className="inline-block bg-[#78350f] p-2 text-cyan-50 rounded">
  Get In Touch
</a>
        </div>
        {/* rigth side */}
        
      </div>
    </div>
  );
};

export default Home;
