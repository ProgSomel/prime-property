import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Login = () => {
  return (
    <div className="px-2 md:px-4 lg:px-8 ">
        <div className="max-w-lg mx-auto mt-12 px-2  p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md ">
    <h2 className="text-3xl font-semibold text-white mb-4">Login</h2>
    <form>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 bg-white bg-opacity-25 rounded-lg placeholder-white focus:outline-none focus:bg-opacity-50 focus:ring-2 focus:ring-white"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="w-full bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg hover:bg-opacity-75 transition duration-300 mb-4">Login</button>
      <div className="flex justify-between">
        <button className="w-1/2 bg-red-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 mr-2">Google</button>
        <button className="w-1/2 bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300 ml-2">GitHub</button>
      </div>
    </form>
    <p className="text-center text-white mt-4">Don't have an account? <Link to="/register" className="text-yellow-300">Register here</Link></p>
  </div>
    </div>
  );
};

export default Login;
