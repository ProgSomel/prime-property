import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// Import Swiper styles
import "swiper/css";

const Banner = () => {
  return (
    <div className="mt-4 mb-20 max-w-6xl mx-auto px-4 md:px-2 lg:px-2">
      <AwesomeSlider className=" h-full">
        <div><img className="h-full"  src={banner1} alt="" /></div>
        <div><img src={banner2} alt="" /></div>
        <div><img src={banner3} alt="" /></div>
      </AwesomeSlider>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
