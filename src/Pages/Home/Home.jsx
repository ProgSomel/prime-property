/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import EstatesCard from "../EstatesCard/EstatesCard";
import Banner from "./Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import FeaturedPropertyTypes from "./FeaturedPropertyTypes/FeaturedPropertyTypes";
import Reviews from "./Reviews/Reviews";
import SearchAndFind from "../../components/SearchAndFind/SearchAndFind";

const Home = () => {
  const estates = useLoaderData();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired options
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div>
        <Banner></Banner>
        <FeaturedPropertyTypes></FeaturedPropertyTypes>
      </div>
      <div>
        <h1 className="text-center font-bold text-4xl">
          Property For Sale/Rent
        </h1>

        <div
          data-aos="fade-right"
          className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 my-14 px-2 md:px-4 lg:px-8 min-h-screen"
        >
          {estates?.map((estate) => (
            <EstatesCard key={estate.id} estates={estate}></EstatesCard>
          ))}
        </div>
      </div>

      <div>
        <SearchAndFind></SearchAndFind>

        <Reviews></Reviews>
      </div>

      <div className="bg-red-700 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between py-16 px-4 md:px-2 lg:px-2 gap-4">
          <div data-aos="fade-right" className="space-y-3 ">
            <h1 className="text-white text-5xl font-bold">
              Do You Have Questions?
            </h1>
            <p className="text-white">
              We'll help you to find your next sweet Home
            </p>
          </div>
          <div data-aos="fade-left" className="">
            <Link to="/contactUs">
            <button className=" btn font-bold  rounded-full borer-2 border-yellow-200">
              Contact Us Today
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
