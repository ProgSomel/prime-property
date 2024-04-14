/* eslint-disable react/no-unescaped-entities */
import { BsCheckCircle } from "react-icons/bs";
import openHouse from "../../assets/images/Search/openHouse.png";
import phoneSearch from "../../assets/images/Search/searchPhone.jpg";


const SearchAndFind = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 lg:px-8 my-8 ">
      <div className="bg-orange-100 w-5 p-8  flex justify-center rounded-tr-full rounded-bl-full">
        <h1 className="font-bold text-2xl text-orange-500 ">01</h1>
      </div>

      {/* 01  */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        {/*! Writing Content  */}
        <div className=" md:col-span-2">
          <div className="space-y-5">
            <h1 className="text-3xl font-bold">Search & Find Perfect Place</h1>
            <p className="text-gray-400">
              Welcome to our premier residential real estate platform, where
              your search for the perfect place ends! Whether you're seeking a
              cozy apartment in the heart of the city, a spacious family home in
              a tranquil suburb, or a luxurious penthouse with breathtaking
              views, we have the ideal property waiting for you. Our extensive
              listings feature a diverse range of homes, from modern
              condominiums to charming townhouses and elegant estates. With
              intuitive search filters and comprehensive property details,
              finding your dream home has never been easier.
            </p>
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-12">
                <p className="flex items-center gap-2">
                  <span className="text-red-400">
                    <BsCheckCircle />
                  </span>{" "}
                  <span className="text-gray-400">100% Money Gaurantee</span>
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-red-400">
                    <BsCheckCircle />
                  </span>{" "}
                  <span className="text-gray-400">Super & Perfect Place</span>
                </p>
              </div>
              <div className="flex gap-12">
                <p className="flex items-center gap-2">
                  <span className="text-red-400">
                    <BsCheckCircle />
                  </span>{" "}
                  <span className="text-gray-400">Effective & Best Price</span>
                </p>

                <p className="flex items-center gap-2">
                  <span className="text-red-400">
                    <BsCheckCircle />
                  </span>{" "}
                  <span className="text-gray-400">Friendly & Lovely Area</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* image  */}
        <div className="">
          <img className="" src={openHouse} alt="" />
        </div>
      </div>

      {/* 02  */}
     <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 mt-20">
     <div className="">
        <img src={phoneSearch} alt="" />
     </div>
     <div className="md:col-span-2">
        <div className="flex justify-end">
        <div className="bg-green-100 w-5 p-8  flex justify-center rounded-tr-full rounded-bl-full mb-5 ">
          <h1 className="font-bold text-2xl text-green-500 ">02</h1>
          {/* 02  */}
        
        </div>
        </div>
        <div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold flex justify-end">Meet Agents & Fixed Your Deal</h1>
                <p className="text-gray-400 flex justify-end">Connect with our team of experienced real estate agents and finalize your deal with confidence! Our dedicated agents are here to guide you through every step of the home buying or selling process, offering personalized assistance tailored to your unique needs. Whether you're a first-time buyer or a seasoned investor, our knowledgeable agents possess the expertise and local market insights to help you make informed decisions. </p>

                <div className="flex justify-end">
                <button className="btn bg-red-900 text-white font-bold">Find Property</button>
                </div>
            </div>
        </div>

        
      </div>
     
     </div>


    
    </div>
  );
};

SearchAndFind.propTypes = {};

export default SearchAndFind;
