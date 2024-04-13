/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import menLogo from "../../../assets/icons/men.png";
import { CiStar } from "react-icons/ci";

// import required modules
import { Pagination } from "swiper/modules";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("../../../../public/reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div data-aos="flip-left">
      <div className="bg-[#f7f8fa] px-2 py-5 md:px-12">
      <h1 className="text-black font-bold mb-5 text-4xl text-center p-5">
        {" "}
        Reviews By Clients
      </h1>
      <div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full max-w-6xl h-[800px] md:h-[400px] lg:h-[300px] mx-auto "
      >
        {reviews.map((review, idx) => (
          <SwiperSlide className="" key={idx}>
            <div>
              <div className="bg-white h-full  text-neutral-content flex justify-center ">
                <div className="card-body  text-gray-400  mt-5   text-center">
                  <p className="flex justify-center items-center text-red-400">
                    {review.rating}{" "}
                    <span className="text-orange-700 ">
                      <CiStar />
                    </span>{" "}
                  </p>

                  <p>{review.review}</p>
                  <div className="flex flex-col md:flex-row items-center gap-5 mt-5">
                    <img className="w-[70px]" src={menLogo} alt="" />
                    <div>
                      <p className="text-2xl font-bold">{review.name}</p>
                      <p>{review.occupation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    </div>
  );
}
