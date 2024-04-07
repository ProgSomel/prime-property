import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="px-2 md:px-4 lg:px-8 mt-12">
      <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-white mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Photo URL"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
              placeholder="Password"
            />
          </div>
          <button className="w-full bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg hover:bg-opacity-75 transition duration-300">
            Register
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

Registration.propTypes = {};

export default Registration;
