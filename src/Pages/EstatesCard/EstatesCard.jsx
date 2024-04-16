import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import 'animate.css';

const EstatesCard = ({ estates }) => {
  const {
    id,
    estate_title,
    price,
    status,
    facilities,
    image,
    rating,
  } = estates;

  return (
    <div>
      <div className="hero  border rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="h-[200px] w-full lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex gap-8 items-center">
              <p className="btn-sm py-1 rounded-md bg-red-50 text-red-500">
                {status}
              </p>
              <p className="text-green-500 font-bold">{price}</p>
            </div>
            <p className="py-4 font-bold text-xl animate__animated animate__bounce ">{estate_title}</p>
            <div className="flex gap-4 items-center">
              {facilities?.map((facility, idx) => (
                <p className="text-orange-900 font-semibold" key={idx}>
                  {facility}
                </p>
              ))}
            </div>
            <div className="flex gap-4 mt-5">
              <p className="bg-blue-200 px-4 py-2 rounded-lg font-bold">
                {rating}
              </p>
              <Link className="w-full " to={`/estates/${id}`}  state={estate_title}>
                <button className="btn bg-gray-900 w-full   text-white font-bold">
                  View Property
                </button>
              </Link>
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
