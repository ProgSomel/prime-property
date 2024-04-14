import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="mb-20 relative max-w-6xl mx-auto px-4  md:px-4 lg:px-2">
      <AwesomeSlider className="h-full border-2 border-orange-400 ">
        <div className="relative bg-cover bg-center bg-no-repeat w-full " style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover'}}>
          <div data-aos="fade-down">
          <div className="text-white text-center p-3 md:p-0">
            <h1 className="text-2xl md:text-7xl font-extrabold md:mb-8 text-white">Search Your Next <span className="text-orange-300 italic text-3xl md:text-8xl">Home</span></h1>
            <p className="mb-12 font-bold md:text-xl">Find new & featured property located in your local city.</p>
            
          </div>
          </div>
        </div>
        <div className="relative bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover' }}>
        <div data-aos="fade-down">
          <div className="text-white text-center p-3 md:p-0">
            <h1 className="text-2xl md:text-7xl font-extrabold md:mb-8 text-white">Search Your Next <span className="text-orange-300 italic text-3xl md:text-8xl">Home</span></h1>
            <p className="mb-12 font-bold md:text-xl">Find new & featured property located in your local city.</p>
            
          </div>
          </div>
        </div>


        <div className="relative bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${banner3})`, backgroundSize: 'cover' }}>
        <div data-aos="fade-down">
          <div className="text-white text-center p-3 md:p-0">
            <h1 className="text-2xl md:text-7xl font-extrabold md:mb-8 text-white">Search Your Next <span className="text-orange-300 italic text-3xl md:text-8xl">Home</span></h1>
            <p className="mb-12 font-bold md:text-xl">Find new & featured property located in your local city.</p>
            
          </div>
          </div>
        </div>
       
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
