import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";

const Banner = () => {
  return (
    <div className=" mb-20   relative">

      <AwesomeSlider className="h-full">
        <div className="relative">
          <img src={banner1} alt="" />
          
          <div className="absolute inset-0 bg-black opacity-50">
            
          </div>
          
        </div>
        <div className="relative">
          <img src={banner2} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative">
          <img src={banner3} alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </AwesomeSlider>
     
    </div>
  );
};

export default Banner;
