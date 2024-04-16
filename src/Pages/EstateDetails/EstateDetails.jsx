import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import "./EstateDetails.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
  {
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1"
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2"
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const estateValue = estates.find((estate) => estate.id === parseInt(id));

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
    lat,
    lng,
  } = estateValue;

  const [center, setCenter] = useState({ lat: lat, lng: lng });
  const ZOOM_LEVEL = 9;

  return (
    <div className="min-h-screen mt-12">
      <h1 className="text-center text-4xl font-bold text-gray-600">
        {segment_name}
      </h1>
      <div className="card max-w-7xl mx-auto mb-12 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-[300px] bg-cover"
          />
        </figure>
        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
          <p className="italic text-orange-300">{description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <p className="font-bold text-green-600">{price}</p>
            <p className="font-bold text-white bg-orange-300 px-2 py-1 rounded-lg">
              {area}
            </p>
            <p className="font-bold text-white bg-blue-300 px-2 py-1 rounded-lg">
              {status}
            </p>
            <p className="font-bold text-white bg-red-400 px-2 py-1 rounded-lg">
              {rating}
            </p>
          </div>
          <div className="flex gap-8 py-5">
            {facilities.map((facility, idx) => (
              <p
                className="bg-[#A4CE95] p-1 rounded-lg font-bold text-white"
                key={idx}
              >
                {facility}
              </p>
            ))}
          </div>
          <div>
            <p className="flex items-center gap-4 font-bold md:text-2xl">
              <FaLocationDot /> {location}
            </p>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#E78895] text-white font-bold md:w-[400px] mt-5">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen max-w-6xl mx-auto flex justify-center">
        <MapContainer center={center} zoom={ZOOM_LEVEL}>
          {/* OPEN STREEN MAPS TILES */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* WATERCOLOR CUSTOM TILES */}
          {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
          {/* GOOGLE MAPS TILES */}
          {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}

          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the markers */}
            {markers.map((marker, idx) => (
              <Marker key={idx} position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}

            {/* Hard coded markers */}
            {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default EstateDetails;
