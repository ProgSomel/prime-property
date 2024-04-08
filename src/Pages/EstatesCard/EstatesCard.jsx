import React from "react";
import PropTypes from "prop-types";

const EstatesCard = ({ estates }) => {
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    rating,
  } = estates;

  return (
    <div>
      <div className="hero  border-2 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
           <div className="flex gap-8 items-center">
           <p className="btn-sm py-1 rounded-md bg-red-50 text-red-500">{status}</p>
           <p className="text-green-500 font-bold">{price}</p>
           </div>
            <p className="py-4 font-bold text-xl">
              {estate_title}
            </p>
            <div className="flex gap-4 items-center">
            {
                facilities.map((facility, idx) => <p className="text-orange-900 font-semibold"  key={idx}>{facility}</p>)
            }
            </div>
            <div className="flex gap-4 mt-5">
            <p className="bg-blue-200 px-4 py-2 rounded-lg font-bold">{rating}</p>
            <button className="btn bg-gray-900 w-1/2 text-white font-bold">View Property</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

EstatesCard.propTypes = {
  estates: PropTypes.object,
};

export default EstatesCard;
