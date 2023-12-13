
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

  const linkedinProfileUrl = 'https://www.linkedin.com/in/fazil-shaikh-69a501217/';

  const handleLinkedinClick = () => {
    window.location.href = linkedinProfileUrl;
  };

    return (
        <div className="bg-bgShade py-2 md:px-12 px-10">
            <div className='flex flex-col md:flex-row md:items-center mt-5  align-middle justify-center gap-8 mb-20'>
            <div className="text-black  font-bold text-lg cursor-pointer">
            <h1>FAZIL SHAIKH</h1>
          </div>
                <div className='flex flex-col md:flex-row md:items-center justify-center gap-4 flex-wrap'>
                <a
              href="#"
              className="block text-primary hover:text-gray-400 py-2 px-4"
            >
              Home
            </a>
            <a href="#" className="block hover:text-gray-400 py-2 px-4">
              Portfolio
            </a>
            <a href="#" className="block  hover:text-gray-400 py-2 px-4">
              
              About me
            </a>
            <a href="#" className="block  hover:text-gray-400 py-2 px-4">
             Education
            </a>
                </div>
                <div className='flex items-center gap-4 ml-4'>
                  
                    <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary' onClick={handleLinkedinClick}/>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Footer;