import  { useEffect } from "react";
import EstatesCard from "../EstatesCard/EstatesCard";
import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
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
    <div>
      <Banner></Banner>
      <FeaturedPropertyTypes></FeaturedPropertyTypes>
      <div>
      <h1 className="text-center font-bold text-4xl">Property For Sale/Rent</h1>
    
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 my-14 px-2 md:px-4 lg:px-8 min-h-screen"
      >
        {estates.map((estate) => (
          <EstatesCard key={estate.id} estates={estate}></EstatesCard>
        ))}
      </div>
      </div>

      <SearchAndFind></SearchAndFind>


      <Reviews></Reviews>
    </div>
  );
};

Home.propTypes = {};

export default Home;
