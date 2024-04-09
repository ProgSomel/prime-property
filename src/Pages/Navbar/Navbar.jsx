import { Link, NavLink } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaArrowRightToBracket } from "react-icons/fa6";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              backgroundColor: isActive ? "orange" : "",
              color: isActive ? "white" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        swal("Successfully logged Out!", "success");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="max-w-6xl mx-auto mt-5 shadow-lg ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[8] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              {user ? (
                <div className="navbar-end ">
                  {/*! Profile  */}
                  <div>
                    <div className="dropdown dropdown-end">
                      <div className="tooltip" data-tip={user?.displayName}>
                        <img
                          className="w-10 rounded-full"
                          alt="profile"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    onClick={handleLogOut}
                    className="btn btn-outline btn-error flex"
                  >
                    <FaArrowRightToBracket />
                    Log Out
                  </Link>
                </div>
              ) : (
                <div className="navbar-end flex items-center">
                  <Link to="/login" className="btn  btn-outline btn-error">
                    <FaArrowRightToBracket />
                    Sign in
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <Link to="/" className="flex items-center text-xl">
            <p className="text-yellow-600">
              <MdOutlineMapsHomeWork />
            </p>
            <p>
              <span className="font-bold text-orange-500">Prime</span>
              <span className="italic text-red-500">Property</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="navbar-end hidden lg:flex">
            {/*! Profile  */}
            <div>
              <div className="dropdown dropdown-end">
                <div className="tooltip" data-tip={user?.displayName}>
                  <img
                    className="w-10 rounded-full"
                    alt="profile"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </div>
            <Link
              onClick={handleLogOut}
              className="btn  ml-4 btn-outline btn-error"
            >
              <FaArrowRightToBracket />
              Log Out
            </Link>
          </div>
        ) : (
          <div className="navbar-end hidden md:flex">
            <Link to="/login" className="btn btn-outline btn-error">
              <FaArrowRightToBracket />
              Sign in
            </Link>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
