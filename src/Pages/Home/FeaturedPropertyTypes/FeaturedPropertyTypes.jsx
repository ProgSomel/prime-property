import { IoIosHome } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { RiBuildingLine } from "react-icons/ri";
import { BsFillBuildingsFill } from "react-icons/bs";
import 'animate.css';

const FeaturedPropertyTypes = () => {
  return (
    <div className="pt-1">
    <h1 className=" text-4xl font-bold text-center ">Featured Property Types</h1>
    <p className="font-light text-center pt-4">Find All Types of Property.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto mt-16 mb-32 px-2 md:px-4 lg:px-8">
      <div className="card  bg-base-100 shadow-xl  hover:animate-pulse	">
        <div className="flex justify-center text-red-400 text-5xl rounded-full bg-red-100 p-5 w-[100px] h-[100px] mx-auto">
          <IoIosHome />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Familty Homes</h2>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl hover:animate-pulse">
        <div className="flex justify-center text-green-400 text-5xl rounded-full bg-green-100 p-5 w-[100px] h-[100px] mx-auto">
        <FaRegBuilding />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Town Houses</h2>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl hover:animate-pulse ">
        <div className="flex justify-center text-orange-400 text-5xl rounded-full bg-orange-100 p-5 w-[100px] h-[100px] mx-auto">
        <RiBuildingLine />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Apartments</h2>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl hover:animate-pulse ">
        <div className="flex justify-center text-blue-400 text-5xl rounded-full bg-blue-100 p-5 w-[100px] h-[100px] mx-auto">
        <BsFillBuildingsFill />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Student Housing</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

FeaturedPropertyTypes.propTypes = {};

export default FeaturedPropertyTypes;
