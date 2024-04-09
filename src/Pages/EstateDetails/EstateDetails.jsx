import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const estateValue = estates.find((estate) => estate.id === parseInt(id));

  if (!estateValue) {
    return <div>Estate not found</div>;
  }

  const {
    estate_title,
    description,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image,
    rating,
  } = estateValue;

  return (
    <div className="min-h-screen mt-12">
    <h1 className="text-center text-4xl font-bold text-gray-600">{segment_name}</h1>
      <div className="card max-w-6xl mx-auto mb-12 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
          <p className="italic text-orange-300">{description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <p className="font-bold text-green-600">{price}</p>
            <p className="font-bold text-white bg-orange-300 px-2 py-1 rounded-lg">{area}</p>
            <p className="font-bold text-white bg-blue-300 px-2 py-1 rounded-lg">{status}</p>
            <p className="font-bold text-white bg-red-400 px-2 py-1 rounded-lg">{rating}</p>
          </div>
          <div className="flex gap-8 py-5">
            {
                facilities.map((facility, idx) => <p className="bg-[#A4CE95] p-1 rounded-lg font-bold text-white" key={idx}>{facility}</p>)
            }
          </div>
          <div>
            <p className="flex items-center gap-4 font-bold md:text-2xl"><FaLocationDot /> {location}</p>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#E78895] text-white font-bold md:w-[400px] mt-5">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
